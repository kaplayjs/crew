import type { SpriteCrewItem } from "@/types/crew.js";
import bagSpriteO from "./bag-o.png";
import bagSprite from "./bag.png";

export const bagData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Bag",
    sprite: bagSprite,
    outlined: bagSpriteO,
    description: "Bag is the one who carries the crew.",
    secret:
        "He likes much eating grass, but more than that, he likes eating snow.",
    author: "tga",
    tags: "crew",
    crewmeta: {
        age: 7,
        height: 7,
        weight: 6300,
        species: "bag",
        origin: "Polygonal Savanna",
        hobbies: ["carrying", "eating", "sleeping"],
        favoriteFood: "grass",
        favoriteColor: "purple",
        gender: 0,
    },
};
