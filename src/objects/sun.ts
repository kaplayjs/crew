import sunSpriteO from "../../assets/objects/sun-o.png";
import sunSprite from "../../assets/objects/sun.png";
import type { SpriteCrewItem } from "../types/crew";

export const sunData: SpriteCrewItem = {
    name: "Sun",
    description: "The source of light.",
    author: "lajbel",
    secret: "It gives important vitamins for beans.",
    type: "objects",
    sprite: sunSprite,
    outlined: sunSpriteO,
};
