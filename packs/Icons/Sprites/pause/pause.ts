import type { SpriteCrewItem } from "@/types/crew";
import pauseSpriteO from "./pause-o.png";
import pauseSprite from "./pause.png";

export const pauseData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pause",
    description: "A pause icon.",
    author: "misanthrope",
    secret: "Time to relax.",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: pauseSprite,
    outlined: pauseSpriteO,
};
