import type { SpriteCrewItem } from "@/types/crew";
import strangerSpriteO from "./stranger-o.png";
import strangerSprite from "./stranger.png";

export const strangerData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Stranger",
    description: "A Bean, an elephant, a stranger?.",
    author: "lajbel",
    secret: "Is a monkey.",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: strangerSprite,
    outlined: strangerSpriteO,
    searchTerms: ["question"],
};
