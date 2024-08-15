import meatSpriteO from "../../assets/food/meat-o.png";
import meatSprite from "../../assets/food/meat.png";
import type { CrewItem } from "../types/crew";

export const meatData: CrewItem = {
    name: "Meat",
    description: "What are you looking for?",
    author: "tga",
    secret: "It's Bean meat, don't eat it, Bean is friend.",
    type: "food",
    sprite: meatSprite,
    outlined: meatSpriteO,
};
