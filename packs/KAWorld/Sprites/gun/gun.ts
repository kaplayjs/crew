import type { SpriteCrewItem } from "@/types/crew";
import gunSpriteO from "./gun-o.png";
import gunSprite from "./gun.png";

export const gunData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Gun",
    description: "A gun, used to shoot enemies, not friends.",
    author: "tga",
    secret: "Is not the TGA's gun.",
    tags: "objects",
    sprite: gunSprite,
    outlined: gunSpriteO,
};
