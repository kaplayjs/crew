import type { SpriteCrewItem } from "@/types/crew.js";
import ghostySpriteO from "./ghosty-o.png";
import ghostySprite from "./ghosty.png";

export const ghostyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Ghosty",
    author: "tga",
    description: "A shy ghost, love helping others tho.",
    secret: "Their family keeps dark secrets",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    outlined: ghostySpriteO,
    sprite: ghostySprite,
    appearances: [
        {
            name: "Ghosthunting",
            description: "\"Bean... are you sure?\"",
            link: "https://play.kaplayjs.com/?example=ghosthunting",
            type: "kaplayground",
            canon: false,
        },
    ],
    crewmeta: {
        birthday: "NaN",
        age: 665,
        favoriteColor: "NaN",
        favoriteFood: "undefined",
        height: NaN,
        hobbies: [undefined, null],
        origin: "unknown",
        species: "ghost",
        weight: 0,
        gender: 2,
    },
};
