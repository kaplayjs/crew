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
    type: "Sprite",
    origin: "Official",
    sprite: weightSprite,
    outlined: weightSpriteO,
};
