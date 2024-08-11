import steelSpriteO from "../../assets/tiles/steel-o.png";
import steelSprite from "../../assets/tiles/steel.png";
import type { CrewItem } from "../types/crew";

export const steelData: CrewItem = {
    name: "steel",
    description: "Hard steel.",
    author: "tga",
    secret: "Maybe it's not steel.",
    type: "tiles",
    sprite: steelSprite,
    outlined: steelSpriteO,
};
