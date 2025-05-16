import type { SpriteCrewItem } from "@/types/crew";
import keySpriteO from "./key-o.png";
import keySprite from "./key.png";

export const keyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Key",
    description: "A key for the door.",
    author: "tga",
    secret: "It's the key of Bag's house.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: keySprite,
    outlined: keySpriteO,
};
