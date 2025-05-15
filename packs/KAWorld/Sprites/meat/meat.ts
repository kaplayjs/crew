import type { SpriteCrewItem } from "@/types/crew.js";
import meatSpriteO from "./meat-o.png";
import meatSprite from "./meat.png";

export const meatData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Meat",
    description: "What are you looking for?",
    author: "tga",
    secret: "It's Bean meat, don't eat it, Bean is friend.",
    tag: "food",
    sprite: meatSprite,
    outlined: meatSpriteO,
};
