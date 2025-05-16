import type { SpriteCrewItem } from "@/types/crew.js";
import marrocSpriteO from "./marroc-o.png";
import marrocSprite from "./marroc.png";

export const marrocData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Marroc",
    description: "Woof woof",
    author: "lajbel",
    secret: "lajbel's dog",
    tags: ["crew"],
    sprite: marrocSprite,
    outlined: marrocSpriteO,
    crewmeta: {
        age: 4,
        favoriteColor: "brown",
        favoriteFood: "bones",
        gender: 0,
        height: 0.5,
        hobbies: ["barking", "running", "eating"],
        origin: "Argentina",
        species: "dog",
        weight: 20,
    },
};
