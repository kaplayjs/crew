import gladySpriteO from "../../assets/crew/glady-o.png";
import gladySprite from "../../assets/crew/glady.png";
import type { SpriteCrewItem } from "../types/crew";

export const gladyData: SpriteCrewItem = {
    name: "Glady",
    description: "A gladiator who loves to fight",
    author: "lajbel",
    secret: "He has come from a coliseum, to battle!",
    category: "crew",
    sprite: gladySprite,
    outlined: gladySpriteO,
    crewmeta: {
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
};
