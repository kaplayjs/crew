import type { SpriteCrewItem } from "@/types/crew";
import steelSpriteO from "./steel-o.png";
import steelSprite from "./steel.png";

export const steelData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Steel",
    description: "Hard steel.",
    author: "tga",
    secret: "Maybe it's not steel.",
    tags: ["tiles"],
    type: "Sprite",
    origin: "Official",
    sprite: steelSprite,
    outlined: steelSpriteO,
};
