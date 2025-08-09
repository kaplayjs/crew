import type { SpriteCrewItem } from "@/types/crew";
import firingSpriteO from "./firing-o.gif";
import firingSprite from "./firing.gif";
import firingSpritesheetO from "./firing-o.png";
import firingSpritesheet from "./firing.png";

export const firingData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Firing",
    description: "Fire is dancing when something is very fire.",
    author: "misanthrope",
    secret: "Shift + H",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Community",
    sprite: firingSprite,
    outlined: firingSpriteO,
    searchTerms: ["fire", "flame"],
    spritesheet: {
        sprite: firingSpritesheet,
        outlined: firingSpritesheetO,
    },
    loadSpriteOpt: {
        sliceX: 2,
        anims: {
            "anim": {
                from: 0,
                to: 1,
                loop: true,
                speed: 6.67,
            },
        },
    },
};
