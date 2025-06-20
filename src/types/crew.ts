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
    | "emojis";

/**
 * A Crew Item represents an asset entry of Crew. It's meant to be transformed
 * in a CrewAsset.
 */
export type CrewItem = SpriteCrewItem | FontCrewItem;

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

type CrewAssetPack = "KAWorld" | "Icons" | "Brand" | "Emojis";

/**
 * Represents a transformed Crew Item. It have all the metadata you would expect
 * for it's usage.
 */
export type CrewAsset = CrewItem & {
    pack: CrewAssetPack;
    imports: {
        importInCrew: string;
        importInPG: string;
    };
};
