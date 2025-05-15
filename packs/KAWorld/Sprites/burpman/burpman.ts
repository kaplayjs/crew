import type { SpriteCrewItem } from "@/types/crew.js";
import burpmanSpriteO from "./burpman-o.png";
import burpmanSprite from "./burpman.png";

export const burpmanData: SpriteCrewItem = {
    name: "Burp Man",
    description: "The king of burps, burpman, here for your burping needs.",
    author: "lajbel",
    secret: "He had a party, but nobody came.",
    category: "crew",
    sprite: burpmanSprite,
    outlined: burpmanSpriteO,
    crewmeta: {
        age: 50,
        height: 1.6,
        weight: 80,
        species: "alien",
        origin: "space",
        hobbies: ["burping", "eating", "sleeping"],
        favoriteFood: "beans",
        favoriteColor: "green",
        gender: 0,
    },
};
