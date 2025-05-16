import type { SpriteCrewItem } from "@/types/crew";
import moonSpriteO from "./moon-o.png";
import moonSprite from "./moon.png";

export const moonData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Moon",
    description: "The moon, behind it, there's a secret.",
    author: "tga",
    secret: "Gigagantrum is behind the moon.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: moonSprite,
    outlined: moonSpriteO,
};
