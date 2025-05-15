import type { SpriteCrewItem } from "@/types/crew.js";
import gigagantrumSpriteO from "./gigagantrum-o.png";
import gigagantrumSprite from "./gigagantrum.png";

export const gigagantrumData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Gigagantrum",
    author: "tga",
    description: "A guy who is very strong",
    secret: "Tga is Gigagantrum best friend.",
    tag: "crew",
    outlined: gigagantrumSpriteO,
    sprite: gigagantrumSprite,
    crewmeta: {
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
