import steelSpriteO from "../../assets/tiles/steel-o.png";
import steelSprite from "../../assets/tiles/steel.png";
import type { SpriteCrewItem } from "../types/crew";

export const steelData: SpriteCrewItem = {
    name: "Steel",
    description: "Hard steel.",
    author: "tga",
    secret: "Maybe it's not steel.",
    category: "tiles",
    sprite: steelSprite,
    outlined: steelSpriteO,
};
