import type { SpriteCrewItem } from "@/types/crew";
import soundsSpriteO from "./sounds-o.png";
import soundsSprite from "./sounds.png";

export const soundsData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Sounds",
    description: "Two sound brothers.",
    author: "lajbel",
    secret: "Sounds of the world.",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: soundsSprite,
    outlined: soundsSpriteO,
};
