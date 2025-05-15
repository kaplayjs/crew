import spikeSpriteO from "../../assets/tiles/spike-o.png";
import spikeSprite from "../../assets/tiles/spike.png";
import type { SpriteCrewItem } from "../types/crew";

export const spikeData: SpriteCrewItem = {
    name: "Spike",
    description: "A spike, be careful!",
    author: "tga",
    secret: "Gigagantrum eat them as breakfast.",
    category: "tiles",
    sprite: spikeSprite,
    outlined: spikeSpriteO,
};
