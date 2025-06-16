import type { SpriteCrewItem } from "@/types/crew.js";
import gigagantrumSpriteO from "./gigagantrum-o.png";
import gigagantrumSprite from "./gigagantrum.png";

export const gigagantrumData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Gigagantrum",
    author: "tga",
    description: "A guy who is very strong",
    secret: "Tga is Gigagantrum's best friend.",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    outlined: gigagantrumSpriteO,
    sprite: gigagantrumSprite,
    crewmeta: {
        birthday: "05/06", // Earthbound release date.
        age: 20,
        favoriteColor: "red",
        favoriteFood: "bombs",
        height: 4,
        hobbies: ["rocking"],
        origin: "Somewhere in KAWORLD",
        species: "rock",
        weight: 100,
        gender: 2,
    },
};
