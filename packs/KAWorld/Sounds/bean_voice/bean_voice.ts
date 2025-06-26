import type { SoundCrewItem } from "@/types/crew";
import beanVoice from "./bean_voice.wav";

export const bean_voiceData: SoundCrewItem = {
    kind: "Sound",
    name: "Bean Voice",
    description: "Bean's voice.",
    author: "lajbel",
    secret: "Beap.",
    tags: ["sounds", "crew"],
    type: "Sound",
    origin: "Official",
    sound: beanVoice,
    fileFormat: "wav",
    appearances: [
        {
            name: "Visual Novel",
            description: "Bean introducing KAPLAY",
            link: "https://play.kaplayjs.com/?example=vn",
            type: "kaplayground",
            canon: true,
        }
    ]
};
