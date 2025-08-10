import type { SpriteCrewItem } from "@/types/crew";
import historySpriteO from "./history-o.png";
import historySprite from "./history.png";

export const historyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "History",
    description: "A history icon.",
    author: "misanthrope",
    secret: "Tracks KAPLAY Changelog",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: historySprite,
    outlined: historySpriteO,
    searchTerms: ["changelog", "rewind", "time", "clock"],
};
