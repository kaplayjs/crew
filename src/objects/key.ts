import keySpriteO from "../../assets/objects/key-o.png";
import keySprite from "../../assets/objects/key.png";
import type { SpriteCrewItem } from "../types/crew";

export const keyData: SpriteCrewItem = {
    name: "Key",
    description: "A key for the door.",
    author: "tga",
    secret: "It's the key of Bag's house.",
    category: "objects",
    sprite: keySprite,
    outlined: keySpriteO,
};
