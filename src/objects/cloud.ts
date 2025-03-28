import cloudSpriteO from "../../assets/objects/cloud-o.png";
import cloudSprite from "../../assets/objects/cloud.png";
import type { SpriteCrewItem } from "../types/crew";

export const cloudData: SpriteCrewItem = {
    name: "Cloud",
    description: "A cloud in the sky!",
    author: "tga",
    secret: "They are also bushes.",
    category: "objects",
    sprite: cloudSprite,
    outlined: cloudSpriteO,
};
