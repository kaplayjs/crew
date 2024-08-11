import watermelonSpriteO from "../../assets/food/watermelon-o.png";
import watermelonSprite from "../../assets/food/watermelon.png";
import type { CrewItem } from "../types/crew";

export const watermelonData: CrewItem = {
    name: "watermelon",
    description: "Watermelon, is the most abundant fruit in KAWorld.",
    author: "tga",
    secret: "Their seeds are toxic.",
    type: "food",
    sprite: watermelonSprite,
    outlined: watermelonSpriteO,
};
