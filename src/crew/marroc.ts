import marrocSpriteO from "../../assets/crew/marroc-o.png";
import marrocSprite from "../../assets/crew/marroc.png";
import type { SpriteCrewItem } from "../types/crew";

export const marrocData: SpriteCrewItem = {
    name: "marroc",
    description: "Woof woof",
    author: "lajbel",
    secret: "lajbel's dog, RIP Marroc",
    type: "crew",
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
