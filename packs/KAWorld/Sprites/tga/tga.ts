import type { SpriteCrewItem } from "@/types/crew.js";
import tgaSpriteO from "./tga-o.png";
import tgaSprite from "./tga.png";

export const tgaData: SpriteCrewItem = {
    kind: "Sprite",
    name: "tga",
    author: "tga",
    description: "A dino, he was the crew's babysitter when they were small.",
    secret: "https://space55.xyz",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    outlined: tgaSpriteO,
    sprite: tgaSprite,
    crewmeta: {
        birthday: "02/08", // Literally it is the tga's birthday.
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
