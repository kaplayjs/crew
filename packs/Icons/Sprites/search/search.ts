import type { SpriteCrewItem } from "@/types/crew";
import searchSpriteO from "./search-o.png";
import searchSprite from "./search.png";

export const searchData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Search",
    description: "A magnifying glass.",
    author: "lajbel",
    secret: "Can't magnify",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: searchSprite,
    outlined: searchSpriteO,
    searchTerms: ["magnifying", "glass", "zoom"],
};
