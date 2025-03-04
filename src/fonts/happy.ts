import happy_28x37Sprite from "../../assets/fonts/happy_28x37.png";
import happy_36x45SpriteO from "../../assets/fonts/happy_36x45-o.png";
import type { FontItem } from "../types/crew";

export const happyData: FontItem = {
    name: "Happy",
    description: "The happy letters.",
    author: "tga",
    secret:
        "It was the default font in Kaboom.js, but has been replaced by monospace.",
    category: "fonts",
    sprite: happy_28x37Sprite,
    outlined: happy_36x45SpriteO,
    width: 28,
    height: 37,
    width_o: 36,
    height_o: 45,
};
