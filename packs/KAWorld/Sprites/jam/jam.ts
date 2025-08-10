import type { SpriteCrewItem } from "@/types/crew.js";
import jamSpriteO from "./jam-o.png";
import jamSprite from "./jam.png";

export const jamData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Jam",
    description: "A strawberry jam. Or maybe other red fruit. But yummy!",
    author: "misanthrope",
    secret: "Fuel for game jammers",
    tags: ["food"],
    type: "Sprite",
    origin: "Official",
    sprite: jamSprite,
    outlined: jamSpriteO,
    appearances: [
        {
            name: "SOK #6",
            description: "Used for game jam promos",
            link: "https://kaplayjs.com/blog/sok6",
            type: "other",
            canon: true,
        },
    ],
    searchTerms: ["jar", "strawberry"],
};
