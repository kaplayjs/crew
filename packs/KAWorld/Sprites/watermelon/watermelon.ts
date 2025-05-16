import type { SpriteCrewItem } from "@/types/crew.js";
import watermelonSpriteO from "./watermelon-o.png";
import watermelonSprite from "./watermelon.png";

export const watermelonData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Watermelon",
    description: "Watermelon, is the most abundant fruit in KAWorld.",
    author: "tga",
    secret: "Their seeds are toxic.",
    tags: ["food"],
    type: "Sprite",
    origin: "Official",
    sprite: watermelonSprite,
    outlined: watermelonSpriteO,
};
