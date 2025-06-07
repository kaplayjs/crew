import type { SpriteCrewItem } from "@/types/crew.js";
import onionSpriteO from "./onion-o.png";
import onionSprite from "./onion.png";

export const onionData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Onion",
    description: "The Onion, is here, say hi, because he won't leave.",
    author: "lajbel",
    secret: "The forgotten",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    sprite: onionSprite,
    outlined: onionSpriteO,
    crewmeta: {
        birthday: "29/02", // Forgotten day
        age: 4,
        favoriteColor: "red",
        favoriteFood: "beans",
        gender: 0,
        height: 0.5,
        hobbies: ["being here", "not leaving"],
        origin: "The void",
        species: "onion",
        weight: 0.5,
    },
};
