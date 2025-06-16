import type { SpriteCrewItem } from "@/types/crew";
import lighteningSpriteO from "./lightening-o.png";
import lighteningSprite from "./lightening.png";

export const lighteningData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Lightening",
    description: "Scrash!",
    author: "tga",
    secret: "One time, Mark ate one.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: lighteningSprite,
    outlined: lighteningSpriteO,
};
