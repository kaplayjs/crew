import type { SpriteCrewItem } from "@/types/crew";
import beantSpriteO from "./beant-o.png";
import beantSprite from "./beant.png";

export const beantData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Bean't",
    description: "Express your dissatisfaction with this bean't!",
    author: "lajbel",
    secret: "MF's favorite emoji",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: beantSprite,
    outlined: beantSpriteO,
};
