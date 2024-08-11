import { buildSync } from "esbuild";

buildSync({
    format: "esm",
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    loader: {
        ".png": "dataurl",
    },
});
