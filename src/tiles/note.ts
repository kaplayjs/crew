import noteSpriteO from "../../assets/tiles/note-o.png";
import noteSprite from "../../assets/tiles/note.png";
import type { CrewItem } from "../types/crew";

export const noteData: CrewItem = {
    name: "note",
    description: "A musical note block!",
    author: "tga",
    secret:
        "It doesn't play different sounds if you put it above different blocks.",
    type: "tiles",
    sprite: noteSprite,
    outlined: noteSpriteO,
};
