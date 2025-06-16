import type { SpriteCrewItem } from "@/types/crew";
import toolboxSpriteO from "./toolbox-o.png";
import toolboxSprite from "./toolbox.png";

export const toolboxData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Toolbox",
    description: "Can we fix it? Yes we can!",
    author: "lajbel",
    secret: "Gigagantrum's toolbox",
    tags: ["ui", "icons"],
    type: "UI",
    origin: "Official",
    sprite: toolboxSprite,
    outlined: toolboxSpriteO,
};
