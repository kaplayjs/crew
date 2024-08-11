import doorSpriteO from "../../assets/objects/door-o.png";
import doorSprite from "../../assets/objects/door.png";
import type { CrewItem } from "../types/crew";

export const doorData: CrewItem = {
    name: "Door",
    description: "Is a door to another world.",
    author: "tga",
    secret: "Is an old door.",
    type: "objects",
    sprite: doorSprite,
    outlined: doorSpriteO,
};
