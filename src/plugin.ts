import {
    type Asset,
    type BitmapFontData,
    type FontData,
    type KAPLAYPlugin,
    type SpriteData,
} from "kaplay";
import { crewAssets, fontAssets } from "./index.js";

export type CrewAsset = keyof typeof crewAssets;
export type FontCrewAsset = keyof typeof fontAssets;

export type KAPLAYCrewPlugin = {
    loadCrew(
        crew: CrewAsset | `${CrewAsset}-o`,
        name?: string,
    ): Asset<SpriteData>;
    loadCrewFont(
        font: FontCrewAsset | `${FontCrewAsset}-o`,
        name?: string,
    ): Asset<FontData | BitmapFontData>;
};

export const crew: KAPLAYPlugin<KAPLAYCrewPlugin> = (k) => {
    return {
        loadCrew(crew, name) {
            name = name ?? crew;

            if (crew.endsWith("-o")) {
                let ocrew = crew.slice(0, -2);
                return k.loadSprite(name, crewAssets[ocrew].outlined);
            }
            else {
                return k.loadSprite(name, crewAssets[crew].sprite);
            }
        },
        loadCrewFont(font, name) {
            name = name ?? font;

            if (font.endsWith("-o")) {
                let ofont = font.slice(0, -2);
                const fontData = fontAssets[ofont as "happy"];
                return k.loadBitmapFont(
                    name,
                    fontData.outlined,
                    fontData.width_o,
                    fontData.height_o,
                );
            }
            else {
                const fontData = fontAssets[font as "happy"];
                return k.loadBitmapFont(
                    name,
                    fontData.sprite,
                    fontData.width,
                    fontData.height,
                );
            }
        },
    };
};
