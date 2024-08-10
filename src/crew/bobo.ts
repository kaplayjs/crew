import boboSpriteO from "../../assets/crew/bobo-o.png";
import boboSprite from "../../assets/crew/bobo.png";
import type { CrewItem } from "../types/crew";

export const boboData: CrewItem = {
    name: "Bobo",
    sprite: boboSprite,
    outlined: boboSpriteO,
    description:
        "A fish in the sea of KAWORLD, but a friend in the heart of everyone.",
    secret: "He's scared about water.",
    author: "tga",
    type: "crew",
    crewmeta: {
        age: 3,
        height: 0.10,
        weight: 3,
        species: "fish",
        origin: "KAWORLD",
        hobbies: ["swimming", "singing", "dancing"],
        favoriteFood: "algae",
        favoriteColor: "blue",
    },
};
