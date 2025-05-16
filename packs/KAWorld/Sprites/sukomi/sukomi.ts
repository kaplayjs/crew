import type { SpriteCrewItem } from "@/types/crew.js";
import sukomiSpriteO from "./sukomi-o.png";
import sukomiSprite from "./sukomi.png";

export const sukomiData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Sukomi",
    description: "The best friend of Bobo! Addicted to math.",
    author: "lajbel",
    secret: "MF's fish",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: sukomiSprite,
    outlined: sukomiSpriteO,
};
