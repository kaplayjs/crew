import lampSpriteO from "../../assets/crew/lamp-o.png";
import lampSprite from "../../assets/crew/lamp.png";
import type { CrewItem } from "../types/crew";

export const lampData: CrewItem = {
    name: "lamp",
    description: "A lamp that lights up the KAWorld.",
    author: "lajbel",
    secret: "Best Gigagantrum friend.",
    type: "crew",
    sprite: lampSprite,
    outlined: lampSpriteO,
    crewmeta: {
        age: 1,
        favoriteColor: "yellow",
        favoriteFood: "electricity",
        height: 0.5,
        gender: 2,
        hobbies: ["lighting up", "being a friend"],
        origin: "The void",
        species: "lamp",
        weight: 0.5,
    },
};