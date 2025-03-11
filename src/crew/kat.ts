import katSpriteO from "../../assets/crew/kat-o.png";
import katSprite from "../../assets/crew/kat.png";
import type { SpriteCrewItem } from "../types/crew";

export const katData: SpriteCrewItem = {
    name: "Kat",
    description: "A cute alien cat.",
    author: "lajbel",
    secret: "Is the Luluxia's pet.",
    category: "crew",
    sprite: katSprite,
    outlined: katSpriteO,
    crewmeta: {
        age: 1,
        favoriteColor: "red",
        favoriteFood: "fish",
        height: 0.5,
        weight: 3,
        hobbies: ["sleeping", "eating", "playing"],
        origin: "space",
        species: "alien",
        gender: 1,
    },
};
