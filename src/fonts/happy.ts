import happy_28x36Sprite from "../../assets/fonts/happy_28x36.png";
import happy_28x36SpriteO from "../../assets/fonts/happy_31x39-o.png";
import type { CrewItem } from "../types/crew";

export const happyData: CrewItem = {
    name: "Happy",
    description: "The happy letters.",
    author: "tga",
    secret:
        "It was the default font in Kaboom.js, but has been replaced by monospace.",
    type: "fonts",
    sprite: happy_28x36Sprite,
    outlined: happy_28x36SpriteO,
};
