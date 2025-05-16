import type { SpriteCrewItem } from "@/types/crew";
import arrowSpriteO from "./arrow-o.png";
import arrowSprite from "./arrow.png";

export const arrowData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Arrow",
    description: "An arrow pointing to the left.",
    author: "lajbel",
    secret: "rotate()",
    tags: ["icons"],
    sprite: arrowSprite,
    outlined: arrowSpriteO,
};
