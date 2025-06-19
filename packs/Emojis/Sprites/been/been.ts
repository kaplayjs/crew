import type { SpriteCrewItem } from "@/types/crew";
import beenSpriteO from "./been-o.png";
import beenSprite from "./been.png";

export const beenData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Been",
    description: "Has been been a bean? Or bean't?..",
    author: "misanthrope",
    secret: "This is how beans look like when programming.",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: beenSprite,
    outlined: beenSpriteO,
    searchTerms: ["bean"],
};
