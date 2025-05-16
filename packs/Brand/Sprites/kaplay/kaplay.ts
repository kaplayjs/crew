import type { SpriteCrewItem } from "@/types/crew";
import kaplaySpriteO from "./kaplay-o.png";
import kaplaySprite from "./kaplay.png";

export const kaplayData: SpriteCrewItem = {
    kind: "Sprite",
    name: "KAPLAY",
    description:
        "KAPLAY logo. KAPLAY is the JavaScript library for creating games.",
    author: "misanthrope",
    secret: "It's the power that gives life in the world.",
    tags: ["brand"],
    sprite: kaplaySprite,
    outlined: kaplaySpriteO,
};
