import grassSpriteO from "./grass-o.png";
import grassSprite from "./grass.png";
import type { SpriteCrewItem } from "@/types/crew";

export const grassData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Grass",
    description: "Grass of KAWorld.",
    author: "tga",
    secret: "Hopefully is real grass.",
    tags: ["tiles"],
    sprite: grassSprite,
    outlined: grassSpriteO,
};
