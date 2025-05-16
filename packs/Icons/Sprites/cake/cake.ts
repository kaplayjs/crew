import type { SpriteCrewItem } from "@/types/crew";
import cakeSpriteO from "./cake-o.png";
import cakeSprite from "./cake.png";

export const cakeData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Cake",
    description: "A piece of cake.",
    author: "lajbel",
    secret: "Is the cake icon lol.",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: cakeSprite,
    outlined: cakeSpriteO,
};
