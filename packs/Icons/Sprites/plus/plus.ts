import type { SpriteCrewItem } from "@/types/crew";
import plusSpriteO from "./plus-o.png";
import plusSprite from "./plus.png";

export const plusData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Plus",
    description: "A plus sign.",
    author: "lajbel",
    secret: "1+1=3",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: plusSprite,
    outlined: plusSpriteO,
};
