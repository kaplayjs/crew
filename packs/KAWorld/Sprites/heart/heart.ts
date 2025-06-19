import type { SpriteCrewItem } from "@/types/crew";
import heartSpriteO from "./heart-o.png";
import heartSprite from "./heart.png";

export const heartData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Heart",
    description: "A heart, love, love, love!",
    author: "tga",
    secret: "Is the heart of the KAWorld.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: heartSprite,
    outlined: heartSpriteO,
    searchTerms: ["love"],
};
