import type { SpriteCrewItem } from "@/types/crew";
import shareSpriteO from "./share-o.png";
import shareSprite from "./share.png";

export const shareData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Share",
    description: "The share icon.",
    author: "lajbel",
    secret: "What does this mean?",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: shareSprite,
    outlined: shareSpriteO,
};
