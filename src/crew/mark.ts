import markSpriteO from "../../assets/crew/mark-o.png";
import markSprite from "../../assets/crew/mark.png";
import type { CrewItem } from "../types/crew";

export const markData: CrewItem = {
    name: "Mark",
    author: "tga",
    description: "ohhi.",
    secret: "He has been forgotten.",
    type: "crew",
    outlined: markSpriteO,
    sprite: markSprite,
    crewmeta: {
        age: 5,
        favoriteColor: "yellow",
        favoriteFood: "bomb",
        height: 1,
        hobbies: ["exploring", "jumping"],
        origin: "Bing Kabang",
        species: "mark",
        weight: 20,
        gender: 0,
    },
};
