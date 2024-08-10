import { bagData } from "./crew/bag";
import { beanData } from "./crew/bean";
import { boboData } from "./crew/bobo";
import { moneyBagData } from "./crew/money_bag";
import type { CrewItem } from "./types/crew";

export const assets: Record<string, CrewItem> = {
    "bean": beanData,
    "bag": bagData,
    "bobo": boboData,
    "money_bag": moneyBagData,
};
