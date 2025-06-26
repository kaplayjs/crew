import type { SoundCrewItem } from "@/types/crew";
import burp from "./burp.mp3";

export const burpData: SoundCrewItem = {
    kind: "Sound",
    name: "Burp",
    description: "The burp sound.",
    author: "misanthrope",
    secret: "Burpman's language.",
    tags: ["sounds", "crew"],
    type: "Sound",
    origin: "Official",
    sound: burp,
    appearances: [
        {
            name: "Press B",
            description: "KAPLAY Core Feature",
            link: "https://play.kaplayjs.com/?example=burp",
            type: "kaplayground",
            canon: true,
        }
    ]
};
