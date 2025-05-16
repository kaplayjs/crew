export type Author = "tga" | "lajbel" | "misanthrope";

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
    /** Secret of this item. */
    secret: string;
    /** Data for Crew Wiki. */
    crewmeta?: CrewMemberMeta;
};

export type CrewMemberMeta = {
    age: number;
    height: number;
    weight: number;
    species: string;
    origin: string;
    hobbies: string[];
    favoriteFood: string;
    favoriteColor: string;
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

type CrewAssetPack = "KAWorld" | "Icons";

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
