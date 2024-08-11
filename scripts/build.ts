import { buildSync } from "esbuild";

const build = buildSync({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outdir: "dist",
    loader: {
        ".png": "dataurl",
    },
});
