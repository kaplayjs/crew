import beanSpriteO from "../../assets/crew/bean-o.png";
import beanSprite from "../../assets/crew/bean.png";
import type { CrewItem } from "../types/crew";

export const beanData: CrewItem = {
    "sprite": beanSprite,
    "outlined": beanSpriteO,
    "description": "A bean, one of much beans.",
    "secret": "Some people thinks she hates Mark",
    "author": "tga",
    "type": "crew",
    crewmeta: {
        "age": 4,
        "height": 0.005,
        "weight": 0.001,
        "species": "bean",
        "origin": "Beanland",
        "hobbies": ["jumping", "bouncing", "rolling"],
        "favoriteFood": "rice",
        "favoriteColor": "green",
    },
};
