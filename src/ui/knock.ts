import knockSpriteO from "../../assets/ui/knock-o.png";
import knockSprite from "../../assets/ui/knock.png";
import type { SpriteCrewItem } from "../types/crew";

export const knockData: SpriteCrewItem = {
    name: "knock",
    description: "A grabbing hand.",
    author: "lajbel",
    secret: "Knock knock!",
    type: "ui",
    sprite: knockSprite,
    outlined: knockSpriteO,
};
