import btflySpriteO from "../../assets/animals/btfly-o.png";
import btflySprite from "../../assets/animals/btfly.png";
import type { SpriteCrewItem } from "../types/crew";

export const btflyData: SpriteCrewItem = {
    name: "btfly",
    description: "Beatiful butterfly.",
    author: "tga",
    secret: "Can't fly.",
    type: "animals",
    sprite: btflySprite,
    outlined: btflySpriteO,
};
