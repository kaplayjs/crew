import type { SpriteCrewItem } from "@/types/crew.js";
import moneyBagSpriteO from "./money_bag-o.png";
import moneyBagSprite from "./money_bag.png";

export const money_bagData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Money Bag",
    sprite: moneyBagSprite,
    outlined: moneyBagSpriteO,
    description:
        "A pink bag who likes much coins, but she doesn't know what to do with them.",
    secret: "She usually gives her coins to KAPLAY Collective.",
    author: "lajbel",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    crewmeta: {
        birthday: "19/11", // Idk about this one
        age: 4,
        height: 6,
        weight: 5300,
        species: "bag",
        origin: "Polygonal Savanna",
        hobbies: ["coing", "greeding", "sleeping"],
        favoriteFood: "coin",
        favoriteColor: "yellow",
        gender: 1,
    },
};
