import type { SpriteCrewItem } from "@/types/crew";
import keySpriteO from "./key-o.png";
import keySprite from "./key.png";

export const keyData: SpriteCrewItem = {
    name: "Key",
    description: "A key for the door.",
    author: "tga",
    secret: "It's the key of Bag's house.",
    tag: "objects",
    sprite: keySprite,
    outlined: keySpriteO,
};
