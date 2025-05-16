import type { SpriteCrewItem } from "@/types/crew";
import kajamSpriteO from "./kajam-o.png";
import kajamSprite from "./kajam.png";

export const kajamData: SpriteCrewItem = {
    kind: "Sprite",
    name: "KAJAM",
    description: "The special jam for all KAPLAYERS!",
    author: "lajbel",
    secret: "Yes...",
    tags: ["brand"],
    type: "Sprite",
    origin: "Official",
    sprite: kajamSprite,
    outlined: kajamSpriteO,
};
