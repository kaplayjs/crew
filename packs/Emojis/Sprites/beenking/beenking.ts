import type { SpriteCrewItem } from "@/types/crew";
import beenkingSpriteO from "./beenking-o.gif";
import beenkingSprite from "./beenking.gif";
import beenkingSpriteSheetO from "./beenking-o.png";
import beenkingSpriteSheet from "./beenking.png";

export const beenkingData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Beenking",
    description: "When been is thinking hard, is beenking.",
    author: "misanthrope",
    secret: "Hasn't been a secret here?",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: beenkingSprite,
    outlined: beenkingSpriteO,
    searchTerms: ["bean", "thinking"],
    spritesheet: {
        sprite: beenkingSpriteSheet,
        outlined: beenkingSpriteSheetO,
    },
    loadSpriteOpt: {
        sliceX: 9,
        sliceY: 8,
        anims: {
            "anim": {
                from: 0,
                to: 65,
                loop: true,
                speed: 62.5,
            },
        },
    },
};
