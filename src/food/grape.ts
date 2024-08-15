import grapeSpriteO from "../../assets/food/grape-o.png";
import grapeSprite from "../../assets/food/grape.png";
import type { CrewItem } from "../types/crew";

export const grapeData: CrewItem = {
    name: "Grape",
    description: "A tasty grape.",
    author: "tga",
    secret: "Hmm?",
    type: "food",
    sprite: grapeSprite,
    outlined: grapeSpriteO,
};
