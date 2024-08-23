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
    | "books";

export type CrewItem = {
    name: string;
    sprite?: string;
    outlined?: string;
    description: string;
    secret: string;
    author: Author;
    type: Type;
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
