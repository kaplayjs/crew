import { bagData } from "./crew/bag";
import { beanData } from "./crew/bean";
import { boboData } from "./crew/bobo";
import { ghostinyData } from "./crew/ghostiny";
import { ghostyData } from "./crew/ghosty";
import { gigagantrumData } from "./crew/gigagantrum";
import { markData } from "./crew/mark";
import { moneyBagData } from "./crew/money_bag";
import type { CrewItem } from "./types/crew";

export const assets: Record<string, CrewItem> = {
    "bean": beanData,
    "bag": bagData,
    "bobo": boboData,
    "money_bag": moneyBagData,
    "ghosty": ghostyData,
    "ghostiny": ghostinyData,
    "mark": markData,
    "gigagantrum": gigagantrumData,
};
