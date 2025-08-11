import type { SpriteCrewItem } from "@/types/crew";
import pencilSpriteO from "./pencil-o.png";
import pencilSprite from "./pencil.png";

export const pencilData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pencil",
    description: "A pencil. With an eraser.",
    author: "misanthrope",
    secret: "Used to draw all crew sprites at 4px size with a circular shape.",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: pencilSprite,
    outlined: pencilSpriteO,
    searchTerms: ["edit"],
};
