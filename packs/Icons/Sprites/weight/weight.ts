import type { SpriteCrewItem } from "@/types/crew";
import weightSpriteO from "./weight-o.png";
import weightSprite from "./weight.png";

export const weightData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Weight",
    description: "The weight",
    author: "lajbel",
    secret: "The weight of the weight is 1kg.",
    tags: ["icons"],
    sprite: weightSprite,
    outlined: weightSpriteO,
};
