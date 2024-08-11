import swordSpriteO from "../../assets/objects/sword-o.png";
import swordSprite from "../../assets/objects/sword.png";
import type { CrewItem } from "../types/crew";

export const swordData: CrewItem = {
    name: "Hero's Sword",
    description: "Is the hero's sword.",
    author: "tga",
    secret: "One day, the hero will come.",
    type: "objects",
    sprite: swordSprite,
    outlined: swordSpriteO,
};
