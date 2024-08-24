import gigagantrumSpriteO from "../../assets/crew/gigagantrum-o.png";
import gigagantrumSprite from "../../assets/crew/gigagantrum.png";
import type { SpriteCrewItem } from "../types/crew";

export const gigagantrumData: SpriteCrewItem = {
    name: "Gigagantrum",
    author: "tga",
    description: "A guy who is very strong",
    secret: "Tga is Gigagantrum best friend.",
    type: "crew",
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
