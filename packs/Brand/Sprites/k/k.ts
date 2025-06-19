import type { SpriteCrewItem } from "@/types/crew";
import kSpriteO from "./k-o.png";
import kSprite from "./k.png";

export const kData: SpriteCrewItem = {
    kind: "Sprite",
    name: "K",
    description: "The first letter of Kaboom",
    author: "lajbel",
    secret:
        "Before this design, there were some others, like a balloon or a bomb",
    tags: ["brand"],
    type: "Sprite",
    origin: "Official",
    sprite: kSprite,
    outlined: kSpriteO,
};
