import type { SpriteCrewItem } from "@/types/crew";
import old_kaplaySpriteO from "./old-kaplay-o.png";
import old_kaplaySprite from "./old-kaplay.png";

export const old_kaplayData: SpriteCrewItem = {
    kind: "Sprite",
    name: "OG KAPLAY",
    description: "The legacy KAPLAY logo.",
    author: "lajbel",
    secret:
        "It was made for another product with the same name, but it finished being the Kaboom's succesor name and logo",
    tags: ["brand"],
    sprite: old_kaplaySprite,
    outlined: old_kaplaySpriteO,
};
