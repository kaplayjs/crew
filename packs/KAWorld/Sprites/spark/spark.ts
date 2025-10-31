import type { SpriteCrewItem } from "@/types/crew";
import sparkSpriteO from "./spark-o.png";
import sparkSprite from "./spark.png";

export const sparkData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Spark",
    description: "One of many sparks.",
    author: "misanthrope",
    secret: "It's Amy's last name!",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: sparkSprite,
    outlined: sparkSpriteO,
    searchTerms: ["sparkle", "magic"],
};
