import type { SpriteCrewItem } from "@/types/crew";
import burpman_burpingSpriteO from "./burmpan-burping-o.gif";
import burpman_burpingSprite from "./burmpan-burping.gif";
import burpman_burpingSpritesheetO from "./burmpan-burping-o.png";
import burpman_burpingSpritesheet from "./burmpan-burping.png";

export const burpman_burpingData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Super Burp!",
    description: "A super burp is what everyone needs!",
    author: "lajbel",
    secret: "What have Burpman eaten?",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: burpman_burpingSprite,
    outlined: burpman_burpingSpriteO,
    spritesheet: {
        sprite: burpman_burpingSpritesheet,
        outlined: burpman_burpingSpritesheetO,
    },
    loadSpriteOpt: {
        sliceX: 6,
        sliceY: 5,
        anims: {
            "anim": {
                from: 0,
                to: 25,
                loop: true,
                speed: 10,
            },
        },
    },
};
