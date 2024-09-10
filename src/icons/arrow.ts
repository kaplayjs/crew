import arrowSpriteO from "../../assets/icons/arrow-o.png";
import arrowSprite from "../../assets/icons/arrow.png";
import type { SpriteCrewItem } from "../types/crew";

export const arrowData: SpriteCrewItem = {
    name: "Arrow",
    description: "An arrow pointing to the left.",
    author: "lajbel",
    secret: "rotate()",
    type: "icons",
    sprite: arrowSprite,
    outlined: arrowSpriteO,
};
