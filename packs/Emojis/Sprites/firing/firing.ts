import type { SpriteCrewItem } from "@/types/crew";
import firingSpriteO from "./firing-o.gif";
import firingSprite from "./firing.gif";

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
};
