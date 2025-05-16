import type { SpriteCrewItem } from "@/types/crew.js";
import ghostySpriteO from "./ghosty-o.png";
import ghostySprite from "./ghosty.png";

export const ghostyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Ghosty",
    author: "tga",
    description: "A ghost who likes to help others.",
    secret: "Their family is very bad people.",
    tags: ["crew"],
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
