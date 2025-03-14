import swordSpriteO from "../../assets/objects/sword-o.png";
import swordSprite from "../../assets/objects/sword.png";
import type { SpriteCrewItem } from "../types/crew";

export const swordData: SpriteCrewItem = {
    name: "Hero's Sword",
    description: "Is the hero's sword.",
    author: "tga",
    secret: "One day, the hero will come.",
    category: "objects",
    sprite: swordSprite,
    outlined: swordSpriteO,
};
