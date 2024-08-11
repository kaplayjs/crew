import spikeSpriteO from "../../assets/tiles/spike-o.png";
import spikeSprite from "../../assets/tiles/spike.png";
import type { CrewItem } from "../types/crew";

export const spikeData: CrewItem = {
    name: "spike",
    description: "A spike, be careful!",
    author: "tga",
    secret: "Gigagantrum eat them as breakfast.",
    type: "tiles",
    sprite: spikeSprite,
    outlined: spikeSpriteO,
};
