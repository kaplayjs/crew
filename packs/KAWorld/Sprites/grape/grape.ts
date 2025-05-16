import type { SpriteCrewItem } from "@/types/crew";
import grapeSpriteO from "./grape-o.png";
import grapeSprite from "./grape.png";

export const grapeData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Grape",
    description: "A tasty grape.",
    author: "tga",
    secret: "Hmm?",
    tags: ["food"],
    type: "Sprite",
    origin: "Official",
    sprite: grapeSprite,
    outlined: grapeSpriteO,
};
