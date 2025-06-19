import type { SpriteCrewItem } from "@/types/crew";
import knockSpriteO from "./knock-o.png";
import knockSprite from "./knock.png";

export const knockData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Knock",
    description: "A grabbing hand.",
    author: "lajbel",
    secret: "Knock knock!",
    tags: ["ui"],
    type: "UI",
    origin: "Official",
    sprite: knockSprite,
    outlined: knockSpriteO,
    searchTerms: ["hand", "grab", "drag", "cursor"],
};
