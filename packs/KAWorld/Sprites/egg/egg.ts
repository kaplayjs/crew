import type { SpriteCrewItem } from "@/types/crew";
import eggSpriteO from "./egg-o.png";
import eggSprite from "./egg.png";

export const eggData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Egg",
    description: "The egg of a chicken or another species.",
    author: "lajbel",
    secret: "In fact, it's a Bean egg.",
    tags: "animals",
    sprite: eggSprite,
    outlined: eggSpriteO,
};
