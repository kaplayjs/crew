import portalSpriteO from "../../assets/objects/portal-o.png";
import portalSprite from "../../assets/objects/portal.png";
import type { CrewItem } from "../types/crew";

export const portalData: CrewItem = {
    name: "Portal",
    description: "A portal out the KAWorld.",
    author: "tga",
    secret: "Some people say the portal let you go to a spacial world.",
    type: "objects",
    sprite: portalSprite,
    outlined: portalSpriteO,
};
