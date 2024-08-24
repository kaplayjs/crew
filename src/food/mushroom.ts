import mushroomSpriteO from "../../assets/food/mushroom-o.png";
import mushroomSprite from "../../assets/food/mushroom.png";
import type { SpriteCrewItem } from "../types/crew";

export const mushroomData: SpriteCrewItem = {
    name: "Mushroom",
    description: "A mushroom, with unknown effects. Maybe it makes you grow.",
    author: "tga",
    secret: "It's blue.",
    type: "food",
    sprite: mushroomSprite,
    outlined: mushroomSpriteO,
};
