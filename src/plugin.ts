import { type Asset, type KAPLAYPlugin, type SpriteData } from "kaplay";
import { assets } from "./index.js";

export type CrewAsset = keyof typeof assets;

export type KAPLAYCrewPlugin = {
    loadCrew(
        crew: CrewAsset | `${CrewAsset}-o`,
        name?: string,
    ): Asset<SpriteData>;
};

export const crew: KAPLAYPlugin<KAPLAYCrewPlugin> = (k) => {
    return {
        loadCrew(crew, name) {
            name = name ?? crew;

            if (crew.endsWith("-o")) {
                let ocrew = crew.slice(0, -2);
                return k.loadSprite(name, assets[ocrew].outlined);
            }
            else {
                return k.loadSprite(name, assets[crew].sprite);
            }
        },
    };
};
