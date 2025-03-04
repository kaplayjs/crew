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
    ): Asset<SpriteData>;
    loadCrewFont(
        font: FontCrewAsset | `${FontCrewAsset}-o`,
    ): Asset<FontData | BitmapFontData>;
};

export const crew: KAPLAYPlugin<KAPLAYCrewPlugin> = (k) => {
    return {
        loadCrew(crew) {
            if (crew.endsWith("-o")) {
                let ocrew = crew.slice(0, -2);
                return k.loadSprite(crew, crewAssets[ocrew].outlined);
            }
            else {
                return k.loadSprite(crew, crewAssets[crew].sprite);
            }
        },
        loadCrewFont(font) {
            if (font.endsWith("-o")) {
                let ofont = font.slice(0, -2);
                const fontData = fontAssets[ofont as "happy"];
                return k.loadBitmapFont(
                    ofont,
                    fontData.outlined,
                    fontData.width_o,
                    fontData.height_o,
                );
            }
            else {
                const fontData = fontAssets[font as "happy"];
                return k.loadBitmapFont(
                    font,
                    fontData.sprite,
                    fontData.width,
                    fontData.height,
                );
            }
        },
    };
};
