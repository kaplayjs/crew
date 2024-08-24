import grapeSpriteO from "../../assets/food/grape-o.png";
import grapeSprite from "../../assets/food/grape.png";
import type { SpriteCrewItem } from "../types/crew";

export const grapeData: SpriteCrewItem = {
    name: "Grape",
    description: "A tasty grape.",
    author: "tga",
    secret: "Hmm?",
    type: "food",
    sprite: grapeSprite,
    outlined: grapeSpriteO,
};
