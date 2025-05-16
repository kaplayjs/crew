import type { SpriteCrewItem } from "@/types/crew";
import kaSpriteO from "./ka-o.png";
import kaSprite from "./ka.png";

export const kaData: SpriteCrewItem = {
    kind: "Sprite",
    name: "KA",
    description: "The K of KAPLAY",
    author: "misanthrope",
    secret: "KAPLAY it's a play between KA and PLAY",
    tags: ["brand"],
    sprite: kaSprite,
    outlined: kaSpriteO,
};
