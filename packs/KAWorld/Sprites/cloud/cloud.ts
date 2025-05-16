import type { SpriteCrewItem } from "@/types/crew.js";
import cloudSpriteO from "./cloud-o.png";
import cloudSprite from "./cloud.png";

export const cloudData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Cloud",
    description: "A cloud in the sky!",
    author: "tga",
    secret: "They are also bushes.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: cloudSprite,
    outlined: cloudSpriteO,
};
