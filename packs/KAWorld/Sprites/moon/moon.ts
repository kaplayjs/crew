import type { SpriteCrewItem } from "@/types/crew";
import moonSpriteO from "./moon-o.png";
import moonSprite from "./moon.png";

export const moonData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Moon",
    description: "The moon, behind it, there's a secret.",
    author: "tga",
    secret: "Gigagantrum is behind the moon.",
    tag: "objects",
    sprite: moonSprite,
    outlined: moonSpriteO,
};
