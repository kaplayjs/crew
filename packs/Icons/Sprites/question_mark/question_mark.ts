import type { SpriteCrewItem } from "@/types/crew";
import question_markSpriteO from "./question_mark-o.png";
import question_markSprite from "./question_mark.png";

export const question_markData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Question Mark",
    description: "What is this?",
    author: "lajbel",
    secret: "The secret Marktool",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: question_markSprite,
    outlined: question_markSpriteO,
};
