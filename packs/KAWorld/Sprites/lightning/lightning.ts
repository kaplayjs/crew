import type { SpriteCrewItem } from "@/types/crew";
import lightningSpriteO from "./lightning-o.png";
import lightningSprite from "./lightning.png";

export const lightningData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Lightning",
    description: "Scrash!",
    author: "tga",
    secret: "One time, Mark ate one.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: lightningSprite,
    outlined: lightningSpriteO,
    searchTerms: ["electricity"],
};
