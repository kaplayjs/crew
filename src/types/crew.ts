import { type Asset, type LoadSpriteOpt } from "kaplay";
import type { assets } from "../index";

export type Author = "tga" | "lajbel" | "misanthrope" | "erik";

export type Tag =
    | "crew"
    | "food"
    | "objects"
    | "animals"
    | "brand"
    | "fonts"
    | "ui"
    | "tiles"
    | "icons"
    | "books"
    | "emojis"
    | "sounds";

/**
 * A Crew Item represents an asset entry of Crew. It's meant to be transformed
 * in a CrewAsset.
 */
export type CrewItem = SpriteCrewItem | FontCrewItem | SoundCrewItem;

/**
 * Represents alternative name for a Crew Item.
 */
type Alias = {
    name: string;
    description?: string;
};

/**
 * Represents a place where an item can be found.
 */
type Appearance = {
    name: string;
    description: string;
    link: string;
    type: "kaplayground" | "other";
    canon: boolean;
};

/**
 * The base of all Items.
 */
export type CrewItemBase = {
    /** The name of an item */
    name: string;
    /** A description of the item. */
    description: string;
    /** Creator of the original source. */
    author: Author;
    /** Tags. */
    tags: Tag[];
    /** A curiousity about the item. */
    secret: string;
    /** Data for Crew Wiki. */
    crewmeta?: CrewMemberMeta;
    /** Alternative names */
    aliases?: Alias[];
    /** Places where it can be found. */
    appearances?: Appearance[];
    /** The category where it should be. */
    type: "Sprite" | "Sound" | "UI";
    /** The type of ownership of the sprite */
    origin: "Official" | "Commission" | "Community";
    /** Alternative terms, synonyms or keywords for searching */
    searchTerms?: string[];
};

export type CrewMemberMeta = {
    /** The day of the month that the member was born. Format: DD/MM */
    birthday: string;
    age: number;
    height: number;
    weight: number;
    species: string;
    origin: string;
    hobbies: string[];
    favoriteFood: string;
    favoriteColor: string;
    /**
     * 0 for male
     * 1 for female
     * 2 for non-binary
     */
    gender: 0 | 1 | 2;
};

export interface SpriteCrewItem extends CrewItemBase {
    kind: "Sprite";
    sprite: string;
    outlined: string;
    spritesheet?: {
        sprite: string;
        outlined: string;
    };
    loadSpriteOpt?: LoadSpriteOpt;
    relatedSound?: Extract<CrewItem, { kind: "Sound" }>["name"];
}

export interface FontCrewItem extends CrewItemBase {
    kind: "Font";
    sprite: string;
    outlined: string;
    ttf?: boolean;
    width: number;
    height: number;
    width_o: number;
    height_o: number;
}

export interface SoundCrewItem extends CrewItemBase {
    kind: "Sound";
    sound: string;
    fileFormat?: "mp3" | "wav" | "ogg";
    relatedSprite?: Extract<CrewItem, { kind: "Sprite" }>["name"];
}

type CrewAssetPack = "KAWorld" | "Icons" | "Brand" | "Emojis";

/**
 * Represents a transformed Crew Item. It have all the metadata you would expect
 * for it's usage.
 */
export type CrewAsset = CrewItem & {
    pack: CrewAssetPack;
    imports: {
        importInCrew: {
            original: string;
            outlined?: string;
        };
        importInPG: {
            original: string;
            outlined?: string;
        };
    };
};

export type Assets = typeof assets;

export type SpriteCrewAsset = {
    [K in keyof Assets]: Assets[K] extends { kind: "Sprite" } ? K : never;
}[keyof Assets];

export type SoundCrewAsset = {
    [K in keyof Assets]: Assets[K] extends { kind: "Sound" } ? K : never;
}[keyof Assets];

export type FontCrewAsset = {
    [K in keyof Assets]: Assets[K] extends { kind: "Font" } ? K : never;
}[keyof Assets];
