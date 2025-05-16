import type { SpriteCrewItem } from "@/types/crew";
import githubSpriteO from "./github-o.png";
import githubSprite from "./github.png";

export const githubData: SpriteCrewItem = {
    kind: "Sprite",
    name: "GitHub",
    description: "Logo of GitHub, a code hosting platform.",
    author: "lajbel",
    secret: "Optocat should be a crew member too.",
    tags: ["icons"],
    sprite: githubSprite,
    outlined: githubSpriteO,
};
