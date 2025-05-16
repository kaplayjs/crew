import type { SpriteCrewItem } from "@/types/crew";
import copiedSprite from "./copied.png";

export const copiedData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Copied",
    description: "Yeah, you copied it. Someone forgot to paste the secret.",
    author: "lajbel",
    secret: "",
    tags: ["ui"],
    sprite: copiedSprite,
    outlined: undefined,
};
