import type { SpriteCrewItem } from "@/types/crew";
import assetbrewSpriteO from "./assetbrew-o.png";
import assetbrewSprite from "./assetbrew.png";

export const assetbrewData: SpriteCrewItem = {
    kind: "Sprite",
    name: "AssetBrew",
    description: "A lot of assets merged.",
    author: "lajbel",
    secret: "PentaMark",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: assetbrewSprite,
    outlined: assetbrewSpriteO,
    searchTerms: ["sprites"],
};
