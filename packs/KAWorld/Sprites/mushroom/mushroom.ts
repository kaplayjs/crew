import type { SpriteCrewItem } from "@/types/crew.js";
import mushroomSpriteO from "./mushroom-o.png";
import mushroomSprite from "./mushroom.png";

export const mushroomData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Mushroom",
    description: "A mushroom, with unknown effects. Maybe it makes you grow.",
    author: "tga",
    secret: "It's blue.",
    tags: ["food"],
    type: "Sprite",
    origin: "Official",
    sprite: mushroomSprite,
    outlined: mushroomSpriteO,
};
