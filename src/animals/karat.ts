import karatSpriteO from "../../assets/animals/karat-o.png";
import karatSprite from "../../assets/animals/karat.png";
import type { SpriteCrewItem } from "../types/crew";

export const karatData: SpriteCrewItem = {
    name: "karat",
    description: "A little Rat who lives in the rocks of the KAWorld.",
    author: "lajbel",
    secret: "Ryan's rat, a life companion",
    type: "animals",
    sprite: karatSprite,
    outlined: karatSpriteO,
    crewmeta: {
        age: 0.5,
        favoriteColor: "yellow",
        favoriteFood: "cheese",
        gender: 1,
        height: 0.2,
        hobbies: ["eating cheese", "exploring", "digging"],
        origin: "KAWorld",
        species: "rat",
        weight: 0.5,
    },
};