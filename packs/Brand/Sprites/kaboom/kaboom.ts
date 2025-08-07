import kaboomSpriteO from "./kaboom-o.png";
import kaboomSprite from "./kaboom.png";
import type { SpriteCrewItem } from "@/types/crew";

export const kaboomData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Kaboom.js",
    description: "What's the game library...?",
    author: "lajbel",
    secret: "It's the destruction of the world.",
    tags: ["brand"],
    type: "Sprite",
    origin: "Official",
    sprite: kaboomSprite,
    outlined: kaboomSpriteO,
    relatedSound: "kaboom2000",
};
