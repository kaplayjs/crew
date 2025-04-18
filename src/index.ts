import { btflyData } from "./animals/btfly";
import { eggData } from "./animals/egg";
import { eggCrackData } from "./animals/eggCrack";
import { karatData } from "./animals/karat";
import { how_to_be_a_bean_wizardData } from "./books/how_to_be_a_bean_wizard";
import { marks_legendData } from "./books/marks_legend";
import { dinoData } from "./brand/dino";
import { draculaData } from "./brand/dracula";
import { kaData } from "./brand/ka.js";
import { kaboomData } from "./brand/kaboom";
import { kajamData } from "./brand/kajam";
import { kaplayData } from "./brand/kaplay";
import { kaplayDinoData } from "./brand/kaplay-dino.js";
import { kaplaygroundData } from "./brand/kaplayground";
import { kaplaygroundDinoData } from "./brand/kaplayground-dino";
import { oldKaplayData } from "./brand/old-kaplay.js";
import { oldKaplaygroundData } from "./brand/old-kaplayground";
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
import { beantData } from "./emojis/beant";
import { burpmanBurpingData } from "./emojis/burpman-burping";
import { pogData } from "./emojis/pog";
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
import { controllerData } from "./icons/controller.js";
import { discordData } from "./icons/discord";
import { fontsData } from "./icons/fonts";
import { githubData } from "./icons/github";
import { homeData } from "./icons/home.js";
import { paletteData } from "./icons/palette";
import { paperData } from "./icons/paper";
import { playData } from "./icons/play";
import { plusData } from "./icons/plus";
import { question_markData } from "./icons/question_mark";
import { ruleData } from "./icons/rule";
import { saveData } from "./icons/save";
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
import type { BrandCrewItem, FontItem, SpriteCrewItem } from "./types/crew";
import { cursorData } from "./ui/cursor";
import { knockData } from "./ui/knock";
import { likeData } from "./ui/like";
import { pointerData } from "./ui/pointer";
export { crew } from "./plugin.js";
export type * from "./plugin.js";

export const crewAssets = {
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

export const brandAssets = {
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

export const fontAssets = {
    "happy": happyData,
} satisfies Record<string, FontItem>;

export const assets = { ...crewAssets, ...brandAssets, ...fontAssets };
