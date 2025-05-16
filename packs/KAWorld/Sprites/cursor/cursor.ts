import type { SpriteCrewItem } from "@/types/crew";
import cursorSpriteO from "./cursor-o.png";
import cursorSprite from "./cursor.png";

export const cursorData: SpriteCrewItem = {
    kind: "Sprite",
    name: "cursor",
    description: "The cursor.",
    author: "lajbel",
    secret: "The master hand.",
    tags: ["ui"],
    type: "UI",
    origin: "Official",
    sprite: cursorSprite,
    outlined: cursorSpriteO,
};
