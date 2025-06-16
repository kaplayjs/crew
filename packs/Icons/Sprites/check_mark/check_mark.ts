import type { SpriteCrewItem } from "@/types/crew";
import check_markSpriteO from "./check_mark-o.png";
import check_markSprite from "./check_mark.png";

export const check_markData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Check Mark",
    description: "Yeah, mark that can be seen after you copy something. And then forget to paste the secret.",
    author: "lajbel",
    secret: "",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: check_markSprite,
    outlined: check_markSpriteO,
};
