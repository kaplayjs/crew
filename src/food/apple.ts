import appleSpriteO from "../../assets/food/apple-o.png";
import appleSprite from "../../assets/food/apple.png";
import type { SpriteCrewItem } from "../types/crew";

export const appleData: SpriteCrewItem = {
    name: "Apple",
    description: "A tasty apple.",
    author: "tga",
    secret: "There's green apples too.",
    type: "food",
    sprite: appleSprite,
    outlined: appleSpriteO,
};
