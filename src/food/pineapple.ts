import pineappleSpriteO from "../../assets/food/pineapple-o.png";
import pineappleSprite from "../../assets/food/pineapple.png";
import type { SpriteCrewItem } from "../types/crew";

export const pineappleData: SpriteCrewItem = {
    name: "Pineapple",
    description: "A tasty pineapple.",
    author: "tga",
    secret: "Hates apples.",
    type: "food",
    sprite: pineappleSprite,
    outlined: pineappleSpriteO,
};
