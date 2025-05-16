import type { SpriteCrewItem } from "@/types/crew";
import api_bookSpriteO from "./api_book-o.png";
import api_bookSprite from "./api_book.png";

export const api_bookData: SpriteCrewItem = {
    kind: "Sprite",
    name: "API Book",
    description:
        "Some people say it talks about mythical creatures, others say it's a book of math.",
    author: "lajbel",
    secret: "It's the MF's book",
    tags: ["icons"],
    sprite: api_bookSprite,
    outlined: api_bookSpriteO,
};
