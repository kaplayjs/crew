import type { SpriteCrewItem } from "@/types/crew.js";
import ghostinySpriteO from "./ghostiny-o.png";
import ghostinySprite from "./ghostiny.png";

export const ghostinyData: SpriteCrewItem = {
    name: "Ghostiny",
    author: "lajbel",
    description: "Lil Ghosty's brother, very quiet.",
    secret: "He admires very much Ghosty.",
    category: "crew",
    outlined: ghostinySpriteO,
    sprite: ghostinySprite,
    crewmeta: {
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
