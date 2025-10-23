import type { SpriteCrewItem } from "@/types/crew.js";
import pumpkaSpriteO from "./pumpka-o.png";
import pumpkaSprite from "./pumpka.png";

export const pumpkaData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pumpka",
    description: "",
    author: "misanthrope",
    secret: "",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: pumpkaSprite,
    outlined: pumpkaSpriteO,
    crewmeta: {
        birthday: "23/10",
        age: 1,
        species: "",
        origin: "",
        hobbies: ["trick or treat", "shining"],
        favoriteFood: "candies",
        favoriteColor: "orange",
        gender: 0,
        height: 1,
        weight: 1,
    },
    searchTerms: ["pumpkin", "halloween", "jack-o-lantern"],
};
