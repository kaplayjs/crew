import type { SpriteCrewItem } from "@/types/crew";
import spider_webSpriteO from "./spider_web-o.png";
import spider_webSprite from "./spider_web.png";

export const spider_webData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Spider Web",
    description: "But wait.. where is the spider?!",
    author: "misanthrope",
    secret: "It's goldfly's biggest fear",
    tags: ["objects"],
    type: "Sprite",
    origin: "Official",
    sprite: spider_webSprite,
    outlined: spider_webSpriteO,
};
