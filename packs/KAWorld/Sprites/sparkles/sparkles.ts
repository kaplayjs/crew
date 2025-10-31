import type { SpriteCrewItem } from "@/types/crew";
import sparklesSpriteO from "./sparkles-o.png";
import sparklesSprite from "./sparkles.png";

export const sparklesData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Sparkles",
    description: "Oh, shiny!",
    author: "misanthrope",
    secret: "It attracts crows.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: sparklesSprite,
    outlined: sparklesSpriteO,
    searchTerms: ["magic"],
};
