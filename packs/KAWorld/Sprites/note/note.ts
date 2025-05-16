import type { SpriteCrewItem } from "@/types/crew";
import noteSpriteO from "./note-o.png";
import noteSprite from "./note.png";

export const noteData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Note",
    description: "A musical note block!",
    author: "tga",
    secret:
        "It doesn't play different sounds if you put it above different blocks.",
    tags: ["tiles"],
    sprite: noteSprite,
    outlined: noteSpriteO,
};
