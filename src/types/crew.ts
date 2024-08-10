export type Author = "tga" | "lajbel";

export type CrewItem = {
    sprite?: string;
    outlined?: string;
    description?: string;
    secret?: string;
    author?: Author;
    type?: string;
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
};