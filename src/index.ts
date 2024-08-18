import { btflyData } from "./animals/btfly";
import { eggData } from "./animals/egg";
import { eggCrackData } from "./animals/eggCrack";
import { bagData } from "./crew/bag";
import { beanData } from "./crew/bean";
import { boboData } from "./crew/bobo";
import { burpmanData } from "./crew/burpman";
import { ghostinyData } from "./crew/ghostiny";
import { ghostyData } from "./crew/ghosty";
import { gigagantrumData } from "./crew/gigagantrum";
import { goldflyData } from "./crew/goldfly";
import { katData } from "./crew/kat";
import { lampData } from "./crew/lamp";
import { markData } from "./crew/mark";
import { moneyBagData } from "./crew/money_bag";
import { onionData } from "./crew/onion";
import { tgaData } from "./crew/tga";
import { appleData } from "./food/apple";
import { grapeData } from "./food/grape";
import { meatData } from "./food/meat";
import { mushroomData } from "./food/mushroom";
import { pineappleData } from "./food/pineapple";
import { watermelonData } from "./food/watermelon";
import { cakeData } from "./icons/cake";
import { ruleData } from "./icons/rule";
import { strangerData } from "./icons/stranger";
import { weightData } from "./icons/weight";
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
    // crew
    "bean": beanData,
    "bag": bagData,
    "bobo": boboData,
    "money_bag": moneyBagData,
    "ghosty": ghostyData,
    "ghostiny": ghostinyData,
    "mark": markData,
    "gigagantrum": gigagantrumData,
    "tga": tgaData,
    "burpman": burpmanData,
    "kat": katData,
    "lamp": lampData,
    "goldfly": goldflyData,
    "onion": onionData,

    // food
    "apple": appleData,
    "grape": grapeData,
    "meat": meatData,
    "mushroom": mushroomData,
    "watermelon": watermelonData,
    "pineapple": pineappleData,

    // animals
    "btfly": btflyData,
    "egg": eggData,
    "eggCrack": eggCrackData,

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

    // icons
    "cake": cakeData,
    "weight": weightData,
    "rule": ruleData,
    "stranger": strangerData,
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

export const icons = Object.values(assets).filter((item) =>
    item.type === "icons"
);

export const animals = Object.values(assets).filter((item) =>
    item.type === "animals"
);
