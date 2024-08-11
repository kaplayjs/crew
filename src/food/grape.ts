import grapeSpriteO from "../../assets/food/apple-o.png";
import grapeSprite from "../../assets/food/apple.png";
import type { CrewItem } from "../types/crew";

export const grapeData: CrewItem = {
    name: "grape",
    description: "A tasty grape.",
    author: "tga",
    secret: "Hmm?",
    type: "food",
    sprite: grapeSprite,
    outlined: grapeSpriteO,
};
