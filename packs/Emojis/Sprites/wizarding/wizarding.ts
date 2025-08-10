import type { SpriteCrewItem } from "@/types/crew";
import wizardingSpriteO from "./wizarding-o.gif";
import wizardingSprite from "./wizarding.gif";
import wizardingSpriteSheetO from "./wizarding-o.png";
import wizardingSpriteSheet from "./wizarding.png";

export const wizardingData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Wizarding",
    description: "Bean Wizard is casting math.",
    author: "lajbel",
    secret: "Math is magic.",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: wizardingSprite,
    outlined: wizardingSpriteO,
    searchTerms: ["bean", "magic"],
    spritesheet: {
        sprite: wizardingSpriteSheet,
        outlined: wizardingSpriteSheetO,
    },
    loadSpriteOpt: {
        sliceX: 11,
        sliceY: 11,
        anims: {
            "anim": {
                from: 0,
                to: 118,
                loop: true,
                speed: 50,
            },
        },
    },
};
