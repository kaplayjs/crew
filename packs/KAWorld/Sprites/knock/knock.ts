import type { SpriteCrewItem } from "@/types/crew";
import knockSpriteO from "./knock-o.png";
import knockSprite from "./knock.png";

export const knockData: SpriteCrewItem = {
    kind: "Sprite",
    name: "knock",
    description: "A grabbing hand.",
    author: "lajbel",
    secret: "Knock knock!",
    tags: ["ui"],
    sprite: knockSprite,
    outlined: knockSpriteO,
};
