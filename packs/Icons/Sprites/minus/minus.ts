import type { SpriteCrewItem } from "@/types/crew";
import minusSpriteO from "./minus-o.png";
import minusSprite from "./minus.png";

export const minusData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Minus",
    description: "A minus sign.",
    author: "misanthrope",
    secret: "Negativity embodied",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: minusSprite,
    outlined: minusSpriteO,
};
