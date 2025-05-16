import type { SpriteCrewItem } from "@/types/crew";
import dinoSpriteO from "./dino-o.png";
import dinoSprite from "./dino.png";

export const dinoData: SpriteCrewItem = {
    kind: "Sprite",
    name: "OG Dino",
    description: "The dinosaur",
    author: "lajbel",
    secret: "Roar",
    tags: ["brand"],
    type: "Sprite",
    origin: "Official",
    sprite: dinoSprite,
    outlined: dinoSpriteO,
};
