import type { SpriteCrewItem } from "@/types/crew";
import sunSpriteO from "./sun-o.png";
import sunSprite from "./sun.png";

export const sunData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Sun",
    description: "The source of light.",
    author: "lajbel",
    secret: "It gives important vitamins for beans.",
    tags: ["objects"],
    sprite: sunSprite,
    outlined: sunSpriteO,
};
