import gunSpriteO from "../../assets/objects/gun-o.png";
import gunSprite from "../../assets/objects/gun.png";
import type { CrewItem } from "../types/crew";

export const gunData: CrewItem = {
    name: "Gun",
    description: "A gun, used to shoot enemies, not friends.",
    author: "tga",
    secret: "Is not the TGA's gun.",
    type: "objects",
    sprite: gunSprite,
    outlined: gunSpriteO,
};
