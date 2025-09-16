import {
    type Asset,
    type BitmapFontData,
    type KAPLAYCtx,
    type KAPLAYPlugin,
    type SoundData,
    type SpriteData,
} from "kaplay";
import { assets } from "./index";
import {
    type Assets,
    type FontCrewAsset,
    type SoundCrewAsset,
    type SpriteCrewAsset,
} from "./types/crew";

export type AssetsKey = {
    [K in keyof Assets]: Assets[K] extends { kind: "Sprite" } ? K | `${K}-o`
        : K;
};

export type CrewName = AssetsKey[keyof AssetsKey];
type SpriteCrewAssetAndOutlined = SpriteCrewAsset | `${SpriteCrewAsset}-o`;

type CrewKind = "sprite" | "sound" | "font";
type CrewKeysByKind = {
    "sprite": SpriteCrewAssetAndOutlined;
    "sound": SoundCrewAsset;
    "font": FontCrewAsset;
};

export type KAPLAYCrewPlugin = {
    loadCrew<T extends CrewKind>(
        kind: T,
        crew: CrewKeysByKind[T],
        name?: string,
    ): Asset<SpriteData> | Asset<BitmapFontData> | Asset<SoundData>;
};

export const crew = (k: KAPLAYCtx): KAPLAYCrewPlugin => {
    return {
        loadCrew(kind, crew, name) {
            name = name ?? crew;
            const isOutlined = crew.endsWith("-o");
            const image = isOutlined ? "outlined" : "sprite";
            const crewKey = crew.replace(/-o$/, "");

            const crewData = assets[crewKey as keyof typeof assets];
            if (!crewData) {
                throw new Error(`Crew ${crew} not found`);
            }

            if (crewData.kind === "Sprite") {
                return k.loadSprite(
                    name,
                    crewData?.spritesheet
                        ? crewData.spritesheet[image]
                        : crewData[image],
                    crewData?.loadSpriteOpt,
                );
            }
            else if (crewData.kind === "Font") {
                return k.loadBitmapFont(
                    name,
                    crewData[image],
                    crewData[isOutlined ? "width_o" : "width"],
                    crewData[isOutlined ? "height_o" : "height"],
                );
            }
            else if (crewData.kind === "Sound") {
                return k.loadSound(
                    name,
                    crewData.sound,
                );
            }
        },
    };
};
