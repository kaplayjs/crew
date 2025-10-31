import type { SpriteCrewItem } from "@/types/crew";
import sparklingSpriteO from "./sparkling-o.gif";
import sparklingSprite from "./sparkling.gif";
import sparklingSpriteSheetO from "./sparkling-o.png";
import sparklingSpriteSheet from "./sparkling.png";

export const sparklingData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Sparkling",
    description: "This is magical.",
    author: "misanthrope",
    secret: "It attracts crows.",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: sparklingSprite,
    outlined: sparklingSpriteO,
    searchTerms: ["sparkles", "magic"],
    spritesheet: {
        sprite: sparklingSpriteSheet,
        outlined: sparklingSpriteSheetO,
    },
    loadSpriteOpt: {
        sliceX: 5,
        anims: {
            "anim": {
                from: 0,
                to: 4,
                loop: true,
                speed: 10,
            },
        },
    },
};
