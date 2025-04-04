import gunSpriteO from "../../assets/objects/gun-o.png";
import gunSprite from "../../assets/objects/gun.png";
import type { SpriteCrewItem } from "../types/crew";

export const gunData: SpriteCrewItem = {
    name: "Gun",
    description: "A gun, used to shoot enemies, not friends.",
    author: "tga",
    secret: "Is not the TGA's gun.",
    category: "objects",
    sprite: gunSprite,
    outlined: gunSpriteO,
};
