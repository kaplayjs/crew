import type { SpriteCrewItem } from "@/types/crew.js";
import pumpkaSpriteO from "./pumpka-o.png";
import pumpkaSprite from "./pumpka.png";

export const pumpkaData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pumpka",
    description:
        "Pumpka works as a lantern on halloween (if not.. sleeping..). Cake borrowed his candle.",
    author: "misanthrope",
    secret: "Pumpkin is a fruit, but people decided it's a vegetable.",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: pumpkaSprite,
    outlined: pumpkaSpriteO,
    crewmeta: {
        birthday: "23/10", // actual day created
        age: 6,
        species: "pumpkin",
        origin: "garden",
        hobbies: ["trick or treating", "shining"],
        favoriteFood: "hokkaido soup",
        favoriteColor: "orange",
        gender: 0,
        height: 0.6,
        weight: 6.66,
    },
    searchTerms: ["pumpkin", "halloween", "jack-o-lantern"],
};
