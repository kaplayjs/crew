import type { SpriteCrewItem } from "@/types/crew";
import beenkingSpriteO from "./beenking-o.gif";
import beenkingSprite from "./beenking.gif";

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
};
