import type { FontCrewItem } from "@/types/crew";
import happy_28x37Sprite from "./happy_28x37.png";
import happy_36x45SpriteO from "./happy_36x45-o.png";

export const happyData: FontCrewItem = {
    kind: "Font",
    name: "Happy",
    description: "The happy letters.",
    author: "tga",
    secret:
        "It was the default font in Kaboom.js, but has been replaced by monospace.",
    tags: "fonts",
    sprite: happy_28x37Sprite,
    outlined: happy_36x45SpriteO,
    width: 28,
    height: 37,
    width_o: 36,
    height_o: 45,
};
