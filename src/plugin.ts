import {
    type Asset,
    type BitmapFontData,
    type KAPLAYPlugin,
    type SpriteData,
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
    ): Asset<SpriteData> | Asset<BitmapFontData>;
};

export const crew: KAPLAYPlugin<KAPLAYCrewPlugin> = (k) => {
    return {
        loadCrew(crew, name) {
            name = name ?? crew;
            const image = crew.endsWith("-o") ? "outlined" : "sprite";

            const crewData = assets[crew as keyof typeof assets];
            if (!crewData) {
                throw new Error(`Crew ${crew} not found`);
            }

            if (crewData.kind === "Sprite") {
                return k.loadSprite(
                    name,
                    crewData[image],
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
        },
    };
};
