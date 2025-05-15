import grassSpriteO from "../../assets/tiles/grass-o.png";
import grassSprite from "../../assets/tiles/grass.png";
import type { SpriteCrewItem } from "../../src/types/crew";

export const grassData: SpriteCrewItem = {
    name: "Grass",
    description: "Grass of KAWorld.",
    author: "tga",
    secret: "Hopefully is real grass.",
    category: "tiles",
    sprite: grassSprite,
    outlined: grassSpriteO,
};
