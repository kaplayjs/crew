import type { SpriteCrewItem } from "@/types/crew.js";
import gladySpriteO from "./glady-o.png";
import gladySprite from "./glady.png";

export const gladyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Glady",
    description: "A gladiator who loves to fight",
    author: "lajbel",
    secret: "He has come from a coliseum, to battle!",
    tags: ["crew"],
    type: "Sprite",
    origin: "Commission",
    sprite: gladySprite,
    outlined: gladySpriteO,
    crewmeta: {
        birthday: "31/03", // Looks like they shutdown something, idk, fun
        age: 19,
        favoriteColor: "purple",
        favoriteFood: "pasta",
        gender: 0,
        height: 1.8,
        hobbies: ["fighting", "eating", "training"],
        origin: "coliseum",
        species: "gladiator",
        weight: 80,
    },
    searchTerms: ["colyseus"],
};
