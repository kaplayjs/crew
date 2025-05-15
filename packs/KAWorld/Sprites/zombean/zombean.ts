import type { SpriteCrewItem } from "@/types/crew.js";
import zombeanSpriteO from "./zombean-o.png";
import zombeanSprite from "./zombean.png";

export const zombeanData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Zombean",
    description:
        "Bean zombified! He's not here to eat your brains, but your beans!",
    author: "lajbel",
    secret: "Do beans have an expiration date?",
    tag: "crew",
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
