import coinSpriteO from "../../assets/objects/coin-o.png";
import coinSprite from "../../assets/objects/coin.png";
import type { CrewItem } from "../types/crew";

export const coinData: CrewItem = {
    name: "Coin",
    description: "An ancient item, nobody knows what they do.",
    author: "tga",
    secret: "There's a lot of them around the KAWorld",
    type: "objects",
    sprite: coinSprite,
    outlined: coinSpriteO,
};