import type { SpriteCrewItem } from "@/types/crew.js";
import katSpriteO from "./kat-o.png";
import katSprite from "./kat.png";

export const katData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Kat",
    description: "A cute alien cat.",
    author: "lajbel",
    secret: "Is the Luluxia's pet.",
    tags: "crew",
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
