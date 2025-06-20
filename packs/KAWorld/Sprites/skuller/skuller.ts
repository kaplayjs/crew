import type { SpriteCrewItem } from "@/types/crew.js";
import skullerSpriteO from "./skuller-o.png";
import skullerSprite from "./skuller.png";

export const skullerData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Skuller",
    description: "Spooky bones is here to scare you!",
    author: "lajbel",
    secret: "Bean has dressed up nicely for Halloween",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: skullerSprite,
    outlined: skullerSpriteO,
    crewmeta: {
        birthday: "01/01", // Makes sense
        age: 1,
        species: "bean",
        origin: "Beanland",
        hobbies: ["trick or treat", "scaring"],
        favoriteFood: "rice",
        favoriteColor: "green",
        gender: 1,
        height: 0.008,
        weight: 0.003,
    },
    searchTerms: ["sans"],
};
