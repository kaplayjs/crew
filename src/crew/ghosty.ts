import ghostySpriteO from "../../assets/crew/ghosty-o.png";
import ghostySprite from "../../assets/crew/ghosty.png";
import type { SpriteCrewItem } from "../types/crew";

export const ghostyData: SpriteCrewItem = {
    name: "Ghosty",
    author: "tga",
    description: "A ghost who likes to help others.",
    secret: "Their family is very bad people.",
    type: "crew",
    outlined: ghostySpriteO,
    sprite: ghostySprite,
    crewmeta: {
        age: 665,
        favoriteColor: "NaN",
        favoriteFood: "undefined",
        height: NaN,
        hobbies: [],
        origin: "unknown",
        species: "ghost",
        weight: 0,
        gender: 2,
    },
};
