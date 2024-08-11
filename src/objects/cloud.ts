import cloudSpriteO from "../../assets/objects/cloud-o.png";
import cloudSprite from "../../assets/objects/cloud.png";
import type { CrewItem } from "../types/crew";

export const cloudData: CrewItem = {
    name: "Cloud",
    description: "A cloud in the sky!",
    author: "tga",
    secret: "They are also bushes.",
    type: "objects",
    sprite: cloudSprite,
    outlined: cloudSpriteO,
};
