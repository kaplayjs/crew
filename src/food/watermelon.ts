import watermelonSpriteO from "../../assets/food/watermelon-o.png";
import watermelonSprite from "../../assets/food/watermelon.png";
import type { SpriteCrewItem } from "../types/crew";

export const watermelonData: SpriteCrewItem = {
    name: "Watermelon",
    description: "Watermelon, is the most abundant fruit in KAWorld.",
    author: "tga",
    secret: "Their seeds are toxic.",
    type: "food",
    sprite: watermelonSprite,
    outlined: watermelonSpriteO,
};
