import type { SoundCrewItem } from "@/types/crew";
import markVoice from "./mark_voice.wav";

export const mark_voiceData: SoundCrewItem = {
    kind: "Sound",
    name: "Mark Voice",
    description: "Mark's voice.",
    author: "lajbel",
    secret: "Mark my words.",
    tags: ["sounds", "crew"],
    type: "Sound",
    origin: "Official",
    sound: markVoice,
    fileFormat: "wav",
    appearances: [
        {
            name: "Visual Novel",
            description: "Mark schooled by Bean about KAPLAY",
            link: "https://play.kaplayjs.com/?example=vn",
            type: "kaplayground",
            canon: true,
        }
    ]
};
