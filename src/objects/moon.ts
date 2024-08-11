import moonSpriteO from "../../assets/objects/moon-o.png";
import moonSprite from "../../assets/objects/moon.png";
import type { CrewItem } from "../types/crew";

export const moonData: CrewItem = {
    name: "Moon",
    description: "The moon, behind it, there's a secret.",
    author: "tga",
    secret: "Gigantrum is behind the moon.",
    type: "objects",
    sprite: moonSprite,
    outlined: moonSpriteO,
};
