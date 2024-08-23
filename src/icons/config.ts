import configSpriteO from "../../assets/icons/config-o.png";
import configSprite from "../../assets/icons/config.png";
import type { CrewItem } from "../types/crew";

export const configData: CrewItem = {
    name: "Config",
    description: "A gear.",
    author: "lajbel",
    secret: "Is the MarkBot's steel heart",
    type: "icons",
    sprite: configSprite,
    outlined: configSpriteO,
};
