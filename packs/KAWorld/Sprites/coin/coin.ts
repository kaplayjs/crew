import type { SpriteCrewItem } from "@/types/crew";
import coinSpriteO from "./coin-o.png";
import coinSprite from "./coin.png";

export const coinData: SpriteCrewItem = {
    name: "Coin",
    description: "An ancient item, nobody knows what they do.",
    author: "tga",
    secret: "There's a lot of them around the KAWorld",
    tag: "objects",
    sprite: coinSprite,
    outlined: coinSpriteO,
};
