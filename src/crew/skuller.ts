import skullerSpriteO from "../../assets/crew/skuller-o.png";
import skullerSprite from "../../assets/crew/skuller.png";
import type { SpriteCrewItem } from "../types/crew";

export const skullerData: SpriteCrewItem = {
    name: "Skuller",
    description: "Spooky bones is here to scare you!",
    author: "lajbel",
    secret: "Bean has dressed up nicely for Halloween",
    category: "crew",
    sprite: skullerSprite,
    outlined: skullerSpriteO,
    crewmeta: {
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
};
