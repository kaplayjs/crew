import zombeanSpriteO from "../../assets/crew/zombean-o.png";
import zombeanSprite from "../../assets/crew/zombean.png";
import type { SpriteCrewItem } from "../types/crew";

export const zombeanData: SpriteCrewItem = {
    name: "zombean",
    description:
        "Bean zombified! He's not here to eat your brains, but your beans!",
    author: "lajbel",
    secret: "Do beans have an expiration date?",
    category: "crew",
    sprite: zombeanSprite,
    outlined: zombeanSpriteO,
    crewmeta: {
        age: 100,
        favoriteColor: "green",
        favoriteFood: "beans",
        gender: 0,
        height: 0.005,
        hobbies: ["eating beans", "chasing beans", "collecting beans"],
        origin: "A tombstone",
        species: "bean",
        weight: 0.001,
    },
};
