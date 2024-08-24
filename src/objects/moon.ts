import moonSpriteO from "../../assets/objects/moon-o.png";
import moonSprite from "../../assets/objects/moon.png";
import type { SpriteCrewItem } from "../types/crew";

export const moonData: SpriteCrewItem = {
    name: "Moon",
    description: "The moon, behind it, there's a secret.",
    author: "tga",
    secret: "Gigagantrum is behind the moon.",
    type: "objects",
    sprite: moonSprite,
    outlined: moonSpriteO,
};
