import type { SpriteCrewItem } from "@/types/crew";
import artSpriteO from "./art-o.png";
import artSprite from "./art.png";

export const artData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Art",
    description: "A piece of art.",
    author: "lajbel",
    secret: "It was drawn by Mark, Mark is a great artist.",
    tags: ["icons"],
    sprite: artSprite,
    outlined: artSpriteO,
};
