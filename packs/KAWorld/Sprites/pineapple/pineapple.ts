import type { SpriteCrewItem } from "@/types/crew.js";
import pineappleSpriteO from "./pineapple-o.png";
import pineappleSprite from "./pineapple.png";

export const pineappleData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pineapple",
    description: "A tasty pineapple.",
    author: "tga",
    secret: "Hates apples.",
    tag: "food",
    sprite: pineappleSprite,
    outlined: pineappleSpriteO,
};
