import type { SpriteCrewItem } from "@/types/crew.js";
import beanSpriteO from "./bean-o.png";
import beanSprite from "./bean.png";

export const beanData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Bean",
    sprite: beanSprite,
    outlined: beanSpriteO,
    description: "A bean, one of much beans.",
    secret: "Some people thinks she hates Mark",
    author: "tga",
    tag: "crew",
    crewmeta: {
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
