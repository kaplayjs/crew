import noteSpriteO from "../../assets/tiles/note-o.png";
import noteSprite from "../../assets/tiles/note.png";
import type { SpriteCrewItem } from "../types/crew";

export const noteData: SpriteCrewItem = {
    name: "Note",
    description: "A musical note block!",
    author: "tga",
    secret:
        "It doesn't play different sounds if you put it above different blocks.",
    category: "tiles",
    sprite: noteSprite,
    outlined: noteSpriteO,
};
