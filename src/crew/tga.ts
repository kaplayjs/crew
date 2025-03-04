import tgaSpriteO from "../../assets/crew/tga-o.png";
import tgaSprite from "../../assets/crew/tga.png";
import type { SpriteCrewItem } from "../types/crew";

export const tgaData: SpriteCrewItem = {
    name: "tga",
    author: "tga",
    description: "A dino, he was the crew's babysitter when they were small.",
    secret: "https://space55.xyz",
    category: "crew",
    outlined: tgaSpriteO,
    sprite: tgaSprite,
    crewmeta: {
        age: 26,
        favoriteColor: "green",
        favoriteFood: "anything with potato",
        height: 1.78,
        hobbies: ["coding", "playing", "playing instruments"],
        origin: "A red country",
        species: "dinosaaur",
        weight: 59,
        gender: 0,
    },
};
