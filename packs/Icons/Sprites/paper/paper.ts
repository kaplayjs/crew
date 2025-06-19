import type { SpriteCrewItem } from "@/types/crew";
import paperSpriteO from "./paper-o.png";
import paperSprite from "./paper.png";

export const paperData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Paper",
    description: "What's new?",
    author: "lajbel",
    secret:
        "You can read: Mark was arrested by the Bean Police after a series of...",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: paperSprite,
    outlined: paperSpriteO,
    searchTerms: ["news"],
};
