import goldflySpriteO from "../../assets/crew/goldfly-o.png";
import goldflySprite from "../../assets/crew/goldfly.png";
import type { SpriteCrewItem } from "../types/crew";

export const goldflyData: SpriteCrewItem = {
    name: "Goldfly",
    description: "A ghost that likes to fly around.",
    author: "lajbel",
    secret: "She hates Ghosty and Ghostiny.",
    category: "crew",
    sprite: goldflySprite,
    outlined: goldflySpriteO,
    crewmeta: {
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
