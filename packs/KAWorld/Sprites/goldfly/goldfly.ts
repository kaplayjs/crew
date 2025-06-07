import type { SpriteCrewItem } from "@/types/crew.js";
import goldflySpriteO from "./goldfly-o.png";
import goldflySprite from "./goldfly.png";

export const goldflyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Goldfly",
    description: "A ghost that likes to fly around.",
    author: "lajbel",
    secret: "She hates Ghosty and Ghostiny.",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: goldflySprite,
    outlined: goldflySpriteO,
    crewmeta: {
        birthday: "llun",
        age: -50,
        favoriteColor: "yellow",
        favoriteFood: "...",
        height: 0,
        gender: 1,
        hobbies: ["flying", "hating Ghosty and Ghostiny"],
        origin: "The void",
        species: "ghost",
        weight: 0,
    },
};
