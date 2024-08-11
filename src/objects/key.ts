import keySpriteO from "../../assets/objects/key-o.png";
import keySprite from "../../assets/objects/key.png";
import type { CrewItem } from "../types/crew";

export const keyData: CrewItem = {
    name: "Key",
    description: "A key for the door.",
    author: "tga",
    secret: "It's the key of Bag's house.",
    type: "objects",
    sprite: keySprite,
    outlined: keySpriteO,
};
