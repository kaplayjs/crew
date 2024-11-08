import { buildSync } from "esbuild";

buildSync({
    format: "esm",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.mjs",
    loader: {
        ".png": "dataurl",
        ".webp": "dataurl",
        ".gif": "dataurl",
    },
});

buildSync({
    format: "cjs",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "dist/index.cjs",
    loader: {
        ".png": "dataurl",
        ".webp": "dataurl",
        ".gif": "dataurl",
    },
});
