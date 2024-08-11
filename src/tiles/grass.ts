import grassSpriteO from "../../assets/tiles/grass-o.png";
import grassSprite from "../../assets/tiles/grass.png";
import type { CrewItem } from "../types/crew";

export const grassData: CrewItem = {
    name: "Grass",
    description: "Grass of KAWorld.",
    author: "tga",
    secret: "Hopefully is real grass.",
    type: "tiles",
    sprite: grassSprite,
    outlined: grassSpriteO,
};
