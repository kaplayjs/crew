import type { SpriteCrewItem } from "@/types/crew";
import pointerSpriteO from "./pointer-o.png";
import pointerSprite from "./pointer.png";

export const pointerData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pointer",
    description: "Is pointing.",
    author: "lajbel",
    secret: "Is pointing a secret?",
    tags: ["ui"],
    type: "UI",
    origin: "Official",
    sprite: pointerSprite,
    outlined: pointerSpriteO,
    searchTerms: ["up", "hand", "cursor"],
};
