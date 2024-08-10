import moneyBagSpriteO from "../../assets/crew/money_bag-o.png";
import moneyBagSprite from "../../assets/crew/money_bag.png";
import type { CrewItem } from "../types/crew";

export const moneyBagData: CrewItem = {
    sprite: moneyBagSprite,
    outlined: moneyBagSpriteO,
    description:
        "A pink bag who likes much coins, but she doesn't know what to do with them.",
    secret: "She usually gives her coins to KAPLAY Collective.",
    author: "lajbel",
    type: "crew",
    crewmeta: {
        age: 4,
        height: 6,
        weight: 5300,
        species: "bag",
        origin: "Polygonal Savanna",
        hobbies: ["coing", "greeding", "sleeping"],
        favoriteFood: "coin",
        favoriteColor: "yellow",
    },
};
