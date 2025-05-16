import type { SpriteCrewItem } from "@/types/crew";
import marks_legendSpriteO from "./marks_legend-o.png";
import marks_legendSprite from "./marks_legend.png";

export const marks_legendData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Mark's Legend",
    description: `
    One day, in an unknown place and time, the world has been corrupted by the evil forces of the dark lord named Deprecation,
    who was spreading his malicious magic across the land.

    The people were living in fear, and the world was slowly disappearing into the void.
    But one day, a hero appeared, a hero who was destined to save the world and defeat the lord.

    Some people tought she was Mark, the legendary hero who was foretold to save the world from the darkness. 
    But no, she was not Mark, but that doesn't means Mark didn't exist in her...
    `,
    author: "lajbel",
    secret: "Written by lajbel",
    tags: ["books"],
    sprite: marks_legendSprite,
    outlined: marks_legendSpriteO,
};
