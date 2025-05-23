import type { SpriteCrewItem } from "@/types/crew";
import eggCrackSpriteO from "./egg_crack-o.png";
import eggCrackSprite from "./egg_crack.png";

export const egg_crackData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Egg (cracked)",
    description: "A cracked egg. A new life is coming.",
    author: "tga",
    secret: "Bean wasn't taking care of it.",
    tags: ["animals"],
    type: "Sprite",
    origin: "Official",
    sprite: eggCrackSprite,
    outlined: eggCrackSpriteO,
};
