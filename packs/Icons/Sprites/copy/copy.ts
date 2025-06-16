import type { SpriteCrewItem } from "@/types/crew";
import copySpriteO from "./copy-o.png";
import copySprite from "./copy.png";

export const copyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Copy",
    description: "A copy icon.",
    author: "lajbel",
    secret: "You can't copy this text.",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: copySprite,
    outlined: copySpriteO,
};
