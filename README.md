# @kaplayjs/crew

The home of KAPLAY assets.

## Installation

```bash
npm install @kaplayjs/crew
```

```bash
yarn add @kaplayjs/crew
```

```bash
pnpm add @kaplayjs/crew
```

```bash
bun add @kaplayjs/crew
```

## Usage

### Using it on KAPLAY

Crew package comes with a plugin for load all KAPLAY crew sprites!

```js
import { crew } from "@kaplayjs/crew";
import kaplay from "kaplay";

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
```
