import type { SpriteCrewItem } from "@/types/crew";
import spikeSpriteO from "./spike-o.png";
import spikeSprite from "./spike.png";

export const spikeData: SpriteCrewItem = {
    kind: "Sprite",
    name: "Spike",
    description: "A spike, be careful!",
    author: "tga",
    secret: "Gigagantrum eats them for breakfast.",
    tags: ["tiles"],
    type: "Sprite",
    origin: "Official",
    sprite: spikeSprite,
    outlined: spikeSpriteO,
};
