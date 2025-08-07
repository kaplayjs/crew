import type { SoundCrewItem } from "@/types/crew";
import kaboom2000 from "./kaboom2000.mp3";

export const kaboom2000Data: SoundCrewItem = {
    kind: "Sound",
    name: "Kaboom 2000",
    description: "Kaboom.js v2000 release song!",
    author: "tga",
    secret: "It's so fun it's so fun it's so fun!",
    tags: ["sounds", "brand"],
    type: "Sound",
    origin: "Official",
    sound: kaboom2000,
    relatedSprite: "kaboom",
    appearances: [
        {
            name: "Concert",
            description: "Celebrate with remake in KAPLAY v3001+!",
            link: "https://play.kaplayjs.com/?example=concert",
            type: "kaplayground",
            canon: true,
        }
    ],
    searchTerms: ["song"],
};
