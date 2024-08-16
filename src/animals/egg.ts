import eggSpriteO from "../../assets/animals/egg-o.png";
import eggSprite from "../../assets/animals/egg.png";
import type { CrewItem } from "../types/crew";

export const eggData: CrewItem = {
    name: "egg",
    description: "The egg of a chicken or another species.",
    author: "lajbel",
    secret: "In fact, it's a Bean egg.",
    type: "animals",
    sprite: eggSprite,
    outlined: eggSpriteO,
};
