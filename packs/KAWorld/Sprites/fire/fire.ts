import type { SpriteCrewItem } from "@/types/crew";
import fireSpriteO from "./fire-o.png";
import fireSprite from "./fire.png";

export const fireData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Fire",
    description: "A very fire fire!",
    author: "erik",
    secret: "The very first adopted sprite by the community!",
    tags: ["objects"],
    type: "Sprite",
    origin: "Community",
    sprite: fireSprite,
    outlined: fireSpriteO,
    searchTerms: ["flame"],
};
