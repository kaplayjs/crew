import type { SpriteCrewItem } from "@/types/crew";
import pogSpriteO from "./pog-o.png";
import pogSprite from "./pog.png";

export const pogData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Pog",
    description: "Express your awesomeness with this pog!",
    author: "lajbel",
    secret: "Awesome!",
    tags: ["emojis"],
    type: "Sprite",
    origin: "Official",
    sprite: pogSprite,
    outlined: pogSpriteO,
};
