import type { SpriteCrewItem } from "@/types/crew.js";
import lampSpriteO from "./lamp-o.png";
import lampSprite from "./lamp.png";

export const lampData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Lamp",
    description: "A lamp that lights up the KAWorld.",
    author: "lajbel",
    secret: "Best Gigagantrum friend.",
    tags: "crew",
    sprite: lampSprite,
    outlined: lampSpriteO,
    crewmeta: {
        age: 1,
        favoriteColor: "yellow",
        favoriteFood: "electricity",
        height: 0.5,
        gender: 2,
        hobbies: ["lighting up", "being a friend"],
        origin: "The void",
        species: "lamp",
        weight: 0.5,
    },
};
