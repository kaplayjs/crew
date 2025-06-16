import type { SpriteCrewItem } from "@/types/crew.js";
import appleSpriteO from "./apple-o.png";
import appleSprite from "./apple.png";

export const appleData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Apple",
    description: "A tasty apple.",
    author: "tga",
    secret: "There're green apples too.",
    tags: ["food"],
    type: "Sprite",
    origin: "Official",
    sprite: appleSprite,
    outlined: appleSpriteO,
};
