import mushroomSpriteO from "../../assets/food/mushroom-o.png";
import mushroomSprite from "../../assets/food/mushroom.png";
import type { CrewItem } from "../types/crew";

export const mushroomData: CrewItem = {
    name: "mushroom",
    description: "A mushroom, with unknown effects. Maybe it makes you grow.",
    author: "tga",
    secret: "It's blue.",
    type: "food",
    sprite: mushroomSprite,
    outlined: mushroomSpriteO,
};
