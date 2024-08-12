import { bagData } from "./crew/bag";
import { beanData } from "./crew/bean";
import { boboData } from "./crew/bobo";
import { ghostinyData } from "./crew/ghostiny";
import { ghostyData } from "./crew/ghosty";
import { gigagantrumData } from "./crew/gigagantrum";
import { markData } from "./crew/mark";
import { moneyBagData } from "./crew/money_bag";
import { tgaData } from "./crew/tga";
import { appleData } from "./food/apple";
import { grapeData } from "./food/grape";
import { meatData } from "./food/meat";
import { mushroomData } from "./food/mushroom";
import { pineappleData } from "./food/pineapple";
import { watermelonData } from "./food/watermelon";
import { cloudData } from "./objects/cloud";
import { coinData } from "./objects/coin";
import { doorData } from "./objects/door";
import { gunData } from "./objects/gun";
import { heartData } from "./objects/heart";
import { keyData } from "./objects/key";
import { lighteningData } from "./objects/lightening";
import { moonData } from "./objects/moon";
import { portalData } from "./objects/portal";
import { sunData } from "./objects/sun";
import { swordData } from "./objects/sword";
import { grassData } from "./tiles/grass";
import { spikeData } from "./tiles/spike";
import { steelData } from "./tiles/steel";
import type { CrewItem } from "./types/crew";

export const assets = {
    "bean": beanData,
    "bag": bagData,
    "bobo": boboData,
    "money_bag": moneyBagData,
    "ghosty": ghostyData,
    "ghostiny": ghostinyData,
    "mark": markData,
    "gigagantrum": gigagantrumData,
    "tga": tgaData,

    // food
    "apple": appleData,
    "grape": grapeData,
    "meat": meatData,
    "mushroom": mushroomData,
    "watermelon": watermelonData,
    "pineapple": pineappleData,

    // objects
    "cloud": cloudData,
    "coin": coinData,
    "door": doorData,
    "gun": gunData,
    "heart": heartData,
    "key": keyData,
    "lightening": lighteningData,
    "moon": moonData,
    "portal": portalData,
    "sun": sunData,
    "sword": swordData,

    // tiles
    "grass": grassData,
    "spike": spikeData,
    "steel": steelData,
} satisfies Record<string, CrewItem>;

export const crew = Object.values(assets).filter((item) =>
    item.type === "crew"
);

export const foods = Object.values(assets).filter((item) =>
    item.type === "food"
);

export const objects = Object.values(assets).filter((item) =>
    item.type === "objects"
);

export const tiles = Object.values(assets).filter((item) =>
    item.type === "tiles"
);
