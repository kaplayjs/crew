import type { SpriteCrewItem } from "@/types/crew";
import saveSpriteO from "./save-o.png";
import saveSprite from "./save.png";

export const saveData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Save",
    description: "A chill diskette",
    author: "lajbel",
    secret: "Saving Kaboom memories",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: saveSprite,
    outlined: saveSpriteO,
};
