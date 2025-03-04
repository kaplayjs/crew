import burpmanSpriteO from "../../assets/crew/burpman-o.png";
import burpmanSprite from "../../assets/crew/burpman.png";
import type { SpriteCrewItem } from "../types/crew";

export const burpmanData: SpriteCrewItem = {
    name: "burpman",
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
