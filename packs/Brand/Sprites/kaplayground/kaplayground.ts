import type { SpriteCrewItem } from "@/types/crew";
import kaplaygroundSpriteO from "./kaplayground-o.png";
import kaplaygroundSprite from "./kaplayground.png";

export const kaplaygroundData: SpriteCrewItem = {
    kind: "Sprite",
    name: "KAPLAYGROUND",
    description: "The official KAPLAY Playground.",
    author: "misanthrope",
    secret: "Ultimatum power.",
    tags: ["brand"],
    type: "Sprite",
    origin: "Official",
    sprite: kaplaygroundSprite,
    outlined: kaplaygroundSpriteO,
};
