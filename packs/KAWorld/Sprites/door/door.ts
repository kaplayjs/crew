import type { SpriteCrewItem } from "@/types/crew";
import doorSpriteO from "./door-o.png";
import doorSprite from "./door.png";

export const doorData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Door",
    description: "Is a door to another world.",
    author: "tga",
    secret: "Is an old door.",
    tags: "objects",
    sprite: doorSprite,
    outlined: doorSpriteO,
};
