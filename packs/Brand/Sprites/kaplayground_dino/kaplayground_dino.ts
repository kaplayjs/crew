import type { SpriteCrewItem } from "@/types/crew";
import kaplayground_dinoSpriteO from "./kaplayground-dino-o.png";
import kaplayground_dinoSprite from "./kaplayground-dino.png";

export const kaplayground_dinoData: SpriteCrewItem = {
    kind: "Sprite",
    name: "KAPLAYGROUND with Dino",
    description: "The official KAPLAY Playground.",
    author: "misanthrope",
    secret: "Ultimatum power. Roar!",
    tags: ["brand"],
    sprite: kaplayground_dinoSprite,
    outlined: kaplayground_dinoSpriteO,
};
