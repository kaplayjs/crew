import type { SpriteCrewItem } from "@/types/crew.js";
import markSpriteO from "./mark-o.png";
import markSprite from "./mark.png";

export const markData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Mark",
    author: "tga",
    description: "ohhi.",
    secret: "He has been forgotten.",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    outlined: markSpriteO,
    sprite: markSprite,
    crewmeta: {
        birthday: "04/06", // Cheese day lol.
        age: 5,
        favoriteColor: "yellow",
        favoriteFood: "bomb",
        height: 1,
        hobbies: ["exploring", "jumping"],
        origin: "Big Kabang",
        species: "mark",
        weight: 20,
        gender: 0,
    },
};
