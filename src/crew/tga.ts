import tgaSpriteO from "../../assets/crew/tga-o.png";
import tgaSprite from "../../assets/crew/tga.png";
import type { CrewItem } from "../types/crew";

export const tgaData: CrewItem = {
    name: "tga",
    author: "tga",
    description: "A dino, he was the crew's babysitter when they were small.",
    secret: "https://space55.xyz",
    type: "crew",
    outlined: tgaSpriteO,
    sprite: tgaSprite,
    crewmeta: {
        age: 26,
        favoriteColor: "unknown",
        favoriteFood: "unknown",
        height: 1.78,
        hobbies: ["coding", "playing"],
        origin: "A red country",
        species: "dinosaaur",
        weight: 59,
        gender: 0,
    },
};
