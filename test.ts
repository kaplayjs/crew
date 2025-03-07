import kaplay from "kaplay";
import { crew } from "./";

const k = kaplay({
    plugins: [crew],
    font: "happy",
});

k.loadCrew("apple");
k.loadCrewFont("happy");

k.add([
    k.sprite("apple"),
]);

k.add([
    k.pos(40, 40),
    k.text("ohhi"),
]);
