import type { SpriteCrewItem } from "@/types/crew.js";
import zombeanSpriteO from "./zombean-o.png";
import zombeanSprite from "./zombean.png";

export const zombeanData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Zombean",
    description:
        "A Zombified Bean! He's not here to eat your brains, but your beans!",
    author: "lajbel",
    secret: "Do beans have an expiration date?",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: zombeanSprite,
    outlined: zombeanSpriteO,
    appearances: [
        {
            name: "Binding",
            description: "The day Bean was zombified",
            link: "https://play.kaplayjs.com/?example=binding",
            type: "kaplayground",
            canon: true,
        },
    ],
    crewmeta: {
        birthday: "The day Bean was zombified",
        age: 100,
        favoriteColor: "green",
        favoriteFood: "beans",
        gender: 0,
        height: 0.005,
        hobbies: ["eating beans", "chasing beans", "collecting beans"],
        origin: "A weird drink...",
        species: "bean",
        weight: 0.001,
    },
};
