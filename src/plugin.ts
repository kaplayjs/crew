import {
    type Asset,
    type BitmapFontData,
    type KAPLAYPlugin,
    type SpriteData,
    type SoundData,
} from "kaplay";
import { assets } from "./index.js";

type Assets = typeof assets;

export type AssetsKey = {
    [K in keyof Assets]: Assets[K] extends { kind: "Sprite" } ? K | `${K}-o`
        : K;
};

export type CrewName = AssetsKey[keyof AssetsKey];

export type KAPLAYCrewPlugin = {
    loadCrew(
        crew: CrewName | `${CrewName}-o`,
        name?: string,
    ): Asset<SpriteData> | Asset<BitmapFontData> | Asset<SoundData>;
};

export const crew: KAPLAYPlugin<KAPLAYCrewPlugin> = (k) => {
    return {
        loadCrew(crew, name) {
            name = name ?? crew;
            const image = crew.endsWith("-o") ? "outlined" : "sprite";
            const crewKey = crew.replace(/-o$/, "");

            const crewData = assets[crewKey as keyof typeof assets];
            if (!crewData) {
                throw new Error(`Crew ${crew} not found`);
            }

            if (crewData.kind === "Sprite") {
                return k.loadSprite(
                    name,
                    crewData?.spritesheet ? crewData.spritesheet[image] : crewData[image],
                    crewData?.loadSpriteOpt,
                );
            }
            else if (crewData.kind === "Font") {
                return k.loadBitmapFont(
                    name,
                    crewData[image],
                    crewData.width,
                    crewData.height,
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
