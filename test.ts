import kaplay from "kaplay";
import { crew } from "./";

const k = kaplay({
    plugins: [crew],
    font: "happy",
});

k.loadCrew("sprite", "apple");
k.loadCrew("sprite", "grape", "purplefruit");
k.loadCrew("font", "happy");

k.add([
    k.sprite("purplefruit"),
]);

k.add([
    k.pos(40, 40),
    k.text("ohhi"),
]);
