import type { SpriteCrewItem } from "@/types/crew";
import menuSpriteO from "./menu-o.png";
import menuSprite from "./menu.png";

export const menuData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Menu",
    description: "A menu icon.",
    author: "lajbel",
    secret: "Hamburger",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: menuSprite,
    outlined: menuSpriteO,
    searchTerms: ["hamburger"],
};
