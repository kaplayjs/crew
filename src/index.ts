import { btflyData } from "./animals/btfly";
import { eggData } from "./animals/egg";
import { eggCrackData } from "./animals/eggCrack";
import { how_to_be_a_bean_wizardData } from "./books/how_to_be_a_bean_wizard";
import { marks_legendData } from "./books/marks_legend";
import { dinoData } from "./brand/dino";
import { kaboomData } from "./brand/kaboom";
import { kaplayData } from "./brand/kaplay";
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
import { happyData } from "./fonts/happy";
import { appleData } from "./food/apple";
import { grapeData } from "./food/grape";
import { meatData } from "./food/meat";
import { mushroomData } from "./food/mushroom";
import { pineappleData } from "./food/pineapple";
import { watermelonData } from "./food/watermelon";
import { api_bookData } from "./icons/api_book";
import { arrowData } from "./icons/arrow";
import { artData } from "./icons/art";
import { assetbrewData } from "./icons/assetbrew";
import { cakeData } from "./icons/cake";
import { configData } from "./icons/config";
import { discordData } from "./icons/discord";
import { fontsData } from "./icons/fonts";
import { githubData } from "./icons/github";
import { paletteData } from "./icons/palette";
import { paperData } from "./icons/paper";
import { playData } from "./icons/play";
import { question_markData } from "./icons/question_mark";
import { ruleData } from "./icons/rule";
import { soundsData } from "./icons/sounds";
import { strangerData } from "./icons/stranger";
import { toolboxData } from "./icons/toolbox";
import { trashData } from "./icons/trash";
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
import type { SpriteCrewItem } from "./types/crew";
import { cursorData } from "./ui/cursor";
import { pointerData } from "./ui/pointer";

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
    "config": configData,
    "fonts": fontsData,
    "palette": paletteData,
    "play": playData,
    "sounds": soundsData,
    "api_book": api_bookData,
    "arrow": arrowData,
    "art": artData,
    "assetbrew": assetbrewData,
    "discord": discordData,
    "github": githubData,
    "question_mark": question_markData,
    "toolbox": toolboxData,
    "trash": trashData,
    "paper": paperData,

    // books
    "marks_legend": marks_legendData,
    "how_to_be_a_bean_wizard": how_to_be_a_bean_wizardData,

    // fonts
    "happy": happyData,

    // ui
    "cursor": cursorData,
    "pointer": pointerData,

    // brand
    "kaboom": kaboomData,
    "kaplay": kaplayData,
    "dino": dinoData,
} satisfies Record<string, SpriteCrewItem>;

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
