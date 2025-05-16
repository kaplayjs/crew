import type { SpriteCrewItem } from "@/types/crew";
import paletteSpriteO from "./palette-o.png";
import paletteSprite from "./palette.png";

export const paletteData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Palette",
    description: "A color palette.",
    author: "lajbel",
    secret: "Mulfok32 is our color palette.",
    tags: ["icons"],
    sprite: paletteSprite,
    outlined: paletteSpriteO,
};
