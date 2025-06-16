import type { SpriteCrewItem } from "@/types/crew";
import cross_markSpriteO from "./cross_mark-o.png";
import cross_markSprite from "./cross_mark.png";

export const cross_markData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Cross Mark",
    description: "Close icon. I mean cross icon. Ok, it's X.",
    author: "misanthrope",
    secret: "You found the treasure!",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: cross_markSprite,
    outlined: cross_markSpriteO,
    crewmeta: {
        birthday: "16/06",
        age: 212, // X marks the spot origin ~1813
        favoriteColor: "red",
        favoriteFood: "treasure",
        height: 1,
        hobbies: ["closing", "marking", "hiding"],
        origin: "Libertatia",
        species: "mark",
        weight: 100,
        gender: 2,
    },
};
