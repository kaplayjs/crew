import type { SpriteCrewItem } from "@/types/crew";
import how_to_be_a_bean_wizardSpriteO from "./how_to_be_a_bean_wizard-o.webp";
import how_to_be_a_bean_wizardSprite from "./how_to_be_a_bean_wizard.webp";

export const how_to_be_a_bean_wizardData: SpriteCrewItem = {
    kind: "Sprite",
    name: "How to be a Bean Wizard",
    description: `
    While the cover promises magic and fantasy, the book is actually mostly math. It contains everything from advanced algebra to calculus with an extra chapter about physics and collision detection strategies. Reading it will turn you into a game dev instead of a bean wizard. Talk about deceptive advertising.
    `,
    author: "lajbel",
    secret: "Written by MF",
    tags: ["books"],
    type: "Sprite",
    origin: "Official",
    sprite: how_to_be_a_bean_wizardSprite,
    outlined: how_to_be_a_bean_wizardSpriteO,
};
