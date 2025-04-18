import how_to_be_a_bean_wizardSpriteO from "../../assets/books/how_to_be_a_bean_wizard-o.webp";
import how_to_be_a_bean_wizardSprite from "../../assets/books/how_to_be_a_bean_wizard.webp";
import type { SpriteCrewItem } from "../types/crew";

export const how_to_be_a_bean_wizardData: SpriteCrewItem = {
    name: "How to be a Bean Wizard",
    description: `
    While the cover promises magic and fantasy, the book is actually mostly math. It contains everything from advanced algebra to calculus with an extra chapter about physics and collision detection strategies. Reading it will turn you into a game dev instead of a bean wizard. Talk about deceptive advertising.
    `,
    author: "lajbel",
    secret: "Written by MF",
    category: "books",
    sprite: how_to_be_a_bean_wizardSprite,
    outlined: how_to_be_a_bean_wizardSpriteO,
};
