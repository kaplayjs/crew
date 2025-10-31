import type { SpriteCrewItem } from "@/types/crew";
import starSpriteO from "./star-o.png";
import starSprite from "./star.png";

export const starData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Star",
    description:
        "Quick, wish something before it gets collected by Super Mark!",
    author: "misanthrope",
    secret: "It granted your last wish!",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: starSprite,
    outlined: starSpriteO,
};
