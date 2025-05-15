import type { SpriteCrewItem } from "@/types/crew.js";
import appleSpriteO from "./apple-o.png";
import appleSprite from "./apple.png";

export const appleData: SpriteCrewItem = {
    name: "Apple",
    description: "A tasty apple.",
    author: "tga",
    secret: "There's green apples too.",
    category: "food",
    sprite: appleSprite,
    outlined: appleSpriteO,
};
