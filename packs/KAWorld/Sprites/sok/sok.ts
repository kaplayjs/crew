import type { SpriteCrewItem } from "@/types/crew";
import sokSpriteO from "./sok-o.png";
import sokSprite from "./sok.png";

export const sokData: SpriteCrewItem = {
    kind: "Sprite",
    name: "SOK",
    description: "The State of KAPLAY blog post series' footwear.",
    author: "misanthrope",
    secret: "So(c)k was removed due to copyright",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: sokSprite,
    outlined: sokSpriteO,
    appearances: [
        {
            name: "SOK #5",
            description:
                "The first time a blog post started to wearing socks, the legendary one",
            link: "https://kaplayjs.com/blog/sok5",
            type: "other",
            canon: true
        }
    ]
};
