import type { SpriteCrewItem } from "@/types/crew";
import likeSpriteO from "./like-o.png";
import likeSprite from "./like.png";

export const likeData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Like",
    description: "Do you like it?",
    author: "lajbel",
    secret: "Like button",
    tags: ["ui"],
    type: "UI",
    origin: "Official",
    sprite: likeSprite,
    outlined: likeSpriteO,
    searchTerms: ["thumbs up", "hand"],
};
