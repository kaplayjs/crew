import type { SpriteCrewItem } from "@/types/crew";
import portalSpriteO from "./portal-o.png";
import portalSprite from "./portal.png";

export const portalData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Portal",
    description: "A portal out of the KAWorld.",
    author: "tga",
    secret: "Some people say the portal let you go to a spacial world.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: portalSprite,
    outlined: portalSpriteO,
};
