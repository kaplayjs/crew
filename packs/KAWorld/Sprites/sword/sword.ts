import type { SpriteCrewItem } from "@/types/crew";
import swordSpriteO from "./sword-o.png";
import swordSprite from "./sword.png";

export const swordData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Hero's Sword",
    description: "Is the hero's sword.",
    author: "tga",
    secret: "One day, the hero will come.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: swordSprite,
    outlined: swordSpriteO,
};
