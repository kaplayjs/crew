import type { SpriteCrewItem } from "@/types/crew";
import copySprite from "./copy.png";

export const copyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Copy",
    description: "A copy icon.",
    author: "lajbel",
    secret: "You can't copy this text.",
    tags: ["ui"],
    type: "UI",
    origin: "Official",
    sprite: copySprite,
    outlined: undefined,
};
