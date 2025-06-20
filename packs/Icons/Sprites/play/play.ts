import type { SpriteCrewItem } from "@/types/crew";
import playSpriteO from "./play-o.png";
import playSprite from "./play.png";

export const playData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Play",
    description: "The play button.",
    author: "lajbel",
    secret: "Start everything.",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: playSprite,
    outlined: playSpriteO,
};
