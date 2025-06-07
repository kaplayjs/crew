import type { SpriteCrewItem } from "@/types/crew.js";
import ghostinySpriteO from "./ghostiny-o.png";
import ghostinySprite from "./ghostiny.png";

export const ghostinyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Ghostiny",
    author: "lajbel",
    description: "Lil Ghosty's brother, very quiet.",
    secret: "He admires very much Ghosty.",
    tags: ["crew"],
    type: "Sprite",
    origin: "Official",
    outlined: ghostinySpriteO,
    sprite: ghostinySprite,
    crewmeta: {
        birthday: "31/10",
        age: 332,
        favoriteColor: "NaN",
        favoriteFood: "undefined",
        height: NaN,
        hobbies: ["gaming"],
        origin: "unknown",
        species: "ghost",
        weight: -1,
        gender: 0,
    },
};
