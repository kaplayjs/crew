import onionSpriteO from "../../assets/crew/onion-o.png";
import onionSprite from "../../assets/crew/onion.png";
import type { CrewItem } from "../types/crew";

export const onionData: CrewItem = {
    name: "onion",
    description: "The Onion, is here, say hi, because he won't leave.",
    author: "lajbel",
    secret: "The forgotten",
    type: "crew",
    sprite: onionSprite,
    outlined: onionSpriteO,
    crewmeta: {
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
