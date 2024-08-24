import pointerSpriteO from "../../assets/ui/pointer-o.png";
import pointerSprite from "../../assets/ui/pointer.png";
import type { SpriteCrewItem } from "../types/crew";

export const pointerData: SpriteCrewItem = {
    name: "pointer",
    description: "Is pointing.",
    author: "lajbel",
    secret: "Is pointing a secret?",
    type: "ui",
    sprite: pointerSprite,
    outlined: pointerSpriteO,
};
