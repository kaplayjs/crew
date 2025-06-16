import type { SpriteCrewItem } from "@/types/crew";
import controllerSpriteO from "./controller-o.png";
import controllerSprite from "./controller.png";

export const controllerData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Controller",
    description: "Super gaming controller",
    author: "lajbel",
    secret: "Use it for ArKade 3000",
    tags: ["icons"],
    type: "Sprite",
    origin: "Official",
    sprite: controllerSprite,
    outlined: controllerSpriteO,
};
