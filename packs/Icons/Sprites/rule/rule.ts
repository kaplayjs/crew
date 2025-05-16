import type { SpriteCrewItem } from "@/types/crew";
import ruleSpriteO from "./rule-o.png";
import ruleSprite from "./rule.png";

export const ruleData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Rule",
    description: "A rule.",
    author: "lajbel",
    secret: "It's a 5cm rule.",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: ruleSprite,
    outlined: ruleSpriteO,
};
