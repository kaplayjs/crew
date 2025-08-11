import type { SpriteCrewItem } from "@/types/crew.js";
import flowySpriteO from "./flowy-o.png";
import flowySprite from "./flowy.png";

export const flowyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Flowy",
    sprite: flowySprite,
    outlined: flowySpriteO,
    description: "A beautiful flower ka-blooming in KAWORLD.",
    secret: "Similarities with other floweys are purely coincidental.",
    author: "misanthrope",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    crewmeta: {
        birthday: "11/08",
        age: 2,
        height: 0.3,
        weight: 0.001,
        species: "flower",
        origin: "KAWORLD",
        hobbies: ["sun bathing", "friendly chatter"],
        favoriteFood: "water",
        favoriteColor: "green",
        gender: 0,
    },
    aliases: [
        {
            name: "KABLOOM",
        },
    ],
    appearances: [
        {
            name: "SOK #6",
            description: "Introduced with BLOOM jam theme",
            link: "https://kaplayjs.com/blog/sok6",
            type: "other",
            canon: true,
        },
    ],
    searchTerms: ["flower", "kabloom"],
};
