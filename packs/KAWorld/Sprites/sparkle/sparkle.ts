import type { SpriteCrewItem } from "@/types/crew";
import sparkleSpriteO from "./sparkle-o.png";
import sparkleSprite from "./sparkle.png";

export const sparkleData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Sparkle",
    description: "One of many sparkles.",
    author: "misanthrope",
    secret: "Makes stuff magical.",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: sparkleSprite,
    outlined: sparkleSpriteO,
    searchTerms: ["magic"],
};
