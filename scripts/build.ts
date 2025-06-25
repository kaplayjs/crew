import { buildSync, type Loader } from "esbuild";

const loader: Record<string, Loader> = {
    ".png": "dataurl",
    ".webp": "dataurl",
    ".gif": "dataurl",
    ".mp3": "dataurl",
    ".wav": "dataurl",
    ".ogg": "dataurl",
}

buildSync({
    format: "esm",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.mjs",
    loader,
});

buildSync({
    format: "cjs",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.cjs",
    loader,
});
