import pineappleSpriteO from "../../assets/food/pineapple-o.png";
import pineappleSprite from "../../assets/food/pineapple.png";
import type { CrewItem } from "../types/crew";

export const pineappleData: CrewItem = {
    name: "Pineapple",
    description: "A tasty pineapple.",
    author: "tga",
    secret: "Hates apples.",
    type: "food",
    sprite: pineappleSprite,
    outlined: pineappleSpriteO,
};
