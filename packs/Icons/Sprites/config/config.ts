import type { SpriteCrewItem } from "@/types/crew";
import configSpriteO from "./config-o.png";
import configSprite from "./config.png";

export const configData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Config",
    description: "A gear.",
    author: "lajbel",
    secret: "Is the MarkBot's steel heart",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: configSprite,
    outlined: configSpriteO,
    searchTerms: ["gear"],
};
