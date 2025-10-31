import type { SpriteCrewItem } from "@/types/crew.js";
import beantleSpriteO from "./beantle-o.png";
import beantleSprite from "./beantle.png";

export const beantleData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Beantle",
    description: "A Bean Beetle, Epilachna varivestis. It's actually real.",
    author: "lajbel",
    secret: "It's Scriptie's friend.",
    tags: ["crew", "animals"],
    type: "Sprite",
    origin: "Commission",
    sprite: beantleSprite,
    outlined: beantleSpriteO,
    crewmeta: {
        birthday: "16/05", // Day created
        age: 1,
        favoriteColor: "yellow",
        favoriteFood: "leaf",
        height: 0.006,
        weight: 0.001,
        hobbies: ["sleeping", "laying eggs"],
        origin: "Mexico",
        species: "bean",
        gender: 0,
    },
    searchTerms: ["beetle", "lady", "bug"],
};
