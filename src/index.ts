// @ts-nocheck

import { how_to_be_a_bean_wizardData } from "../legacystuff/books/how_to_be_a_bean_wizard";
import { marks_legendData } from "../legacystuff/books/marks_legend";
import { dinoData } from "../legacystuff/brand/dino";
import { draculaData } from "../legacystuff/brand/dracula";
import { kaData } from "../legacystuff/brand/ka.js";
import { kaboomData } from "../legacystuff/brand/kaboom";
import { kajamData } from "../legacystuff/brand/kajam";
import { kaplayData } from "../legacystuff/brand/kaplay";
import { kaplayDinoData } from "../legacystuff/brand/kaplay-dino.js";
import { kaplaygroundData } from "../legacystuff/brand/kaplayground";
import { kaplaygroundDinoData } from "../legacystuff/brand/kaplayground-dino";
import { oldKaplayData } from "../legacystuff/brand/old-kaplay.js";
import { oldKaplaygroundData } from "../legacystuff/brand/old-kaplayground";
import { beantData } from "../legacystuff/emojis/beant";
import { burpmanBurpingData } from "../legacystuff/emojis/burpman-burping";
import { pogData } from "../legacystuff/emojis/pog";
import { happyData } from "../legacystuff/fonts/happy";
import { api_bookData } from "../legacystuff/icons/api_book";
import { arrowData } from "../legacystuff/icons/arrow";
import { artData } from "../legacystuff/icons/art";
import { assetbrewData } from "../legacystuff/icons/assetbrew";
import { cakeData } from "../legacystuff/icons/cake";
import { configData } from "../legacystuff/icons/config";
import { controllerData } from "../legacystuff/icons/controller.js";
import { discordData } from "../legacystuff/icons/discord";
import { fontsData } from "../legacystuff/icons/fonts";
import { githubData } from "../legacystuff/icons/github";
import { homeData } from "../legacystuff/icons/home.js";
import { paletteData } from "../legacystuff/icons/palette";
import { paperData } from "../legacystuff/icons/paper";
import { playData } from "../legacystuff/icons/play";
import { plusData } from "../legacystuff/icons/plus";
import { question_markData } from "../legacystuff/icons/question_mark";
import { ruleData } from "../legacystuff/icons/rule";
import { saveData } from "../legacystuff/icons/save";
import { soundsData } from "../legacystuff/icons/sounds";
import { strangerData } from "../legacystuff/icons/stranger";
import { toolboxData } from "../legacystuff/icons/toolbox";
import { trashData } from "../legacystuff/icons/trash";
import { weightData } from "../legacystuff/icons/weight";
import { grassData } from "../legacystuff/tiles/grass";
import { spikeData } from "../legacystuff/tiles/spike";
import { steelData } from "../legacystuff/tiles/steel";
import { btflyData } from "./animals/btfly";
import { eggData } from "./animals/egg";
import { eggCrackData } from "./animals/eggCrack";
import { karatData } from "./animals/karat";
import { bagData } from "./crew/bag";
import { beanData } from "./crew/bean";
import { boboData } from "./crew/bobo";
import { burpmanData } from "./crew/burpman";
import { ghostinyData } from "./crew/ghostiny";
import { ghostyData } from "./crew/ghosty";
import { gigagantrumData } from "./crew/gigagantrum";
import { gladyData } from "./crew/glady.js";
import { goldflyData } from "./crew/goldfly";
import { katData } from "./crew/kat";
import { lampData } from "./crew/lamp";
import { markData } from "./crew/mark";
import { marrocData } from "./crew/marroc";
import { moneyBagData } from "./crew/money_bag";
import { onionData } from "./crew/onion";
import { skullerData } from "./crew/skuller";
import { sukomiData } from "./crew/sukomi";
import { tgaData } from "./crew/tga";
import { zombeanData } from "./crew/zombean";
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
import { crew } from "./plugin.js";
import type { BrandCrewItem, FontItem, SpriteCrewItem } from "./types/crew";
import { cursorData } from "./ui/cursor";
import { knockData } from "./ui/knock";
import { likeData } from "./ui/like";
import { pointerData } from "./ui/pointer";

const crewAssets = {
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
    "marroc": marrocData,
    "sukomi": sukomiData,
    "skuller": skullerData,
    "zombean": zombeanData,
    "glady": gladyData,

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
    "karat": karatData,

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

    // emojis
    "superburp": burpmanBurpingData,
    "pog": pogData,
    "beant": beantData,

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
    "plus": plusData,
    "save": saveData,
    "home": homeData,
    "controller": controllerData,

    // books
    "marks_legend": marks_legendData,
    "how_to_be_a_bean_wizard": how_to_be_a_bean_wizardData,

    // ui
    "cursor": cursorData,
    "pointer": pointerData,
    "like": likeData,
    "knock": knockData,
} satisfies Record<string, SpriteCrewItem>;

const brandAssets = {
    "kaplay": kaplayData,
    "kaplay-dino": kaplayDinoData,
    "dino": dinoData,
    "dracula": draculaData,
    "kajam": kajamData,
    "kaplayground": kaplaygroundData,
    "kaplayground_dino": kaplaygroundDinoData,
    "old_kaplayground": oldKaplaygroundData,
    "kaboom": kaboomData,
    "ka": kaData,
    "old_kaplay": oldKaplayData,
} satisfies Record<string, BrandCrewItem>;

const fontAssets = {
    "happy": happyData,
} satisfies Record<string, FontItem>;

const assets = { ...crewAssets, ...brandAssets, ...fontAssets };

export { assets, brandAssets, crew, crewAssets, fontAssets };
