import doorSpriteO from "../../assets/objects/door-o.png";
import doorSprite from "../../assets/objects/door.png";
import type { SpriteCrewItem } from "../types/crew";

export const doorData: SpriteCrewItem = {
    name: "Door",
    description: "Is a door to another world.",
    author: "tga",
    secret: "Is an old door.",
    category: "objects",
    sprite: doorSprite,
    outlined: doorSpriteO,
};
