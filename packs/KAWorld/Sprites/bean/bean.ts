import type { SpriteCrewItem } from "@/types/crew.js";
import beanSpriteO from "./bean-o.png";
import beanSprite from "./bean.png";

export const beanData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Bean",
    sprite: beanSprite,
    outlined: beanSpriteO,
    description: "A bean, one of many beans.",
    secret: "Some people think she hates Mark",
    author: "tga",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    aliases: [
        {
            name: "Green Mark",
            description: "Bean doesn't like this name much...",
        },
    ],
    appearances: [
        {
            name: "Knock",
            description:
                "Poor Bean. Always the target of 'chap-the-door' pranks",
            link: "https://play.kaplayjs.com/?example=fakeMouse",
            type: "kaplayground",
            canon: true,
        },
    ],
    crewmeta: {
        birthday: "01/01",
        age: 4,
        height: 0.005,
        weight: 0.001,
        species: "bean",
        origin: "Beanland",
        hobbies: ["jumping", "bouncing", "rolling"],
        favoriteFood: "rice",
        favoriteColor: "green",
        gender: 1,
    },
};
