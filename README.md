# @kaplayjs/crew

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

k.loadCrew("apple");
k.loadCrewFont("happy");

k.add([
    k.sprite("apple"),
]);

k.add([
    k.pos(40, 40),
    k.text("ohhi"),
]);
```
