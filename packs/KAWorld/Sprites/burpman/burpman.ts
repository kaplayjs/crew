import type { SpriteCrewItem } from "@/types/crew.js";
import burpmanSpriteO from "./burpman-o.png";
import burpmanSprite from "./burpman.png";

export const burpmanData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Burp Man",
    description: "The king of burps, burpman, here for your burping needs.",
    author: "lajbel",
    secret: "He had a party, but nobody came.",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: burpmanSprite,
    outlined: burpmanSpriteO,
    crewmeta: {
        birthday: "07/02",
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
    relatedSound: "burp",
};
