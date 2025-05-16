import type { SpriteCrewItem } from "@/types/crew";
import trashSpriteO from "./trash-o.png";
import trashSprite from "./trash.png";

export const trashData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Trash",
    description: "A trash can.",
    author: "lajbel",
    secret: "Who's inside? Oscar?",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: trashSprite,
    outlined: trashSpriteO,
};
