import bagSpriteO from "./assets/crew/bag-o.png";
import bagSprite from "./assets/crew/bag.png";
import beanSpriteO from "./assets/crew/bean-o.png";
import beanSprite from "./assets/crew/bean.png";
import boboSpriteO from "./assets/crew/bobo-o.png";
import boboSprite from "./assets/crew/bobo.png";

export const assets = {
    "bean": {
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
    },
    "bag": {
        "sprite": bagSprite,
        "outlined": bagSpriteO,
        "description": "Bag is the one who carries the crew.",
        "secret":
            "He likes much eating grass, but more than that, he likes eating snow.",
        "author": "tga",
        "type": "crew",
        crewmeta: {
            "age": 7,
            "height": 7,
            "weight": 6300,
            "species": "bag",
            "origin": "Polygonal Savanna",
            "hobbies": ["carrying", "eating", "sleeping"],
            "favoriteFood": "grass",
            "favoriteColor": "purple",
        },
    },
    "bobo": {
        "sprite": boboSprite,
        "outlined": boboSpriteO,
        "description":
            "A fish in the sea of KAWORLD, but a friend in the heart of everyone.",
        "secret": "He's scared about water.",
        "author": "tga",
        "type": "crew",
        crewmeta: {
            "age": 3,
            "height": 0.10,
            "weight": 3,
            "species": "fish",
            "origin": "KAWORLD",
            "hobbies": ["swimming", "singing", "dancing"],
            "favoriteFood": "fish",
            "favoriteColor": "blue",
        },
    },
};
