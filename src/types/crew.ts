export type Author = "tga" | "lajbel";
export type Type =
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

export type SpriteCrewItem = {
    name: string;
    sprite: string;
    outlined: string;
    description: string;
    secret: string;
    author: Author;
    type: Type;
    crewmeta?: CrewMemberMeta;
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
