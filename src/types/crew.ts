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

export type CrewItem = {
    name: string;
    description: string;
    author: Author;
    tag: Tag;
    secret: string;
    crewmeta?: CrewMemberMeta;
};

export type SpriteCrewItem = CrewItem & {
    sprite: string;
    outlined: string;
};

export type BrandCrewItem = CrewItem & {
    sprite: string;
    outlined?: string;
};

export type FontItem = CrewItem & {
    sprite: string;
    outlined: string;
    ttf?: boolean;
    width: number;
    height: number;
    width_o: number;
    height_o: number;
};

export type SoundItem = CrewItem & {
    sound: string;
};

export type CrewMemberMeta = {
    age: number;
    /**
     * Height in meters
     */
    height: number;
    weight: number;
    species: string;
    origin: string;
    hobbies: string[];
    favoriteFood: string;
    favoriteColor: string;
    gender: 0 | 1 | 2;
};
