import type { SpriteCrewItem } from "@/types/crew.js";
import boboSpriteO from "./bobo-o.png";
import boboSprite from "./bobo.png";

export const boboData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Bobo",
    sprite: boboSprite,
    outlined: boboSpriteO,
    description:
        "A fish in the sea of KAWORLD, but a friend in the heart of everyone.",
    secret: "He's scared about water.",
    author: "tga",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    crewmeta: {
        birthday: "03/12", // The day a random user sent a bobo sprite.
        age: 3,
        height: 0.10,
        weight: 3,
        species: "fish",
        origin: "KAWORLD",
        hobbies: ["swimming", "singing", "dancing"],
        favoriteFood: "algae",
        favoriteColor: "blue",
        gender: 0,
    },
};
