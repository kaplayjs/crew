import type { SpriteCrewItem } from "@/types/crew";
import btflySpriteO from "./btfly-o.png";
import btflySprite from "./btfly.png";

export const btflyData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Butterfly",
    description: "Beatiful butterfly.",
    author: "tga",
    secret: "Can't fly.",
    tags: ["animals"],
    type: "Sprite",
    origin: "Official",
    sprite: btflySprite,
    outlined: btflySpriteO,
};
