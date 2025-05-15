// Generate index.ts with all packs
import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const packsPath = path.join(__dirname, "../packs/");
const srcPath = path.join(__dirname, "../src/");

// #region Utils
function escape(str: string) {
    return str
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'")
        .replace(/"/g, "\\\"")
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r");
}
// #endregion

type Pack = {
    name: string;
    datas: {
        name: string;
        import: string;
        export: string;
        imports: {
            crew: string;
            pg: string;
        };
        kind: string;
    }[];
    spritesImports: string[];
};

const packPaths: string[] = [];

// Get packs in packs folder
for (const file of fs.readdirSync(packsPath)) {
    const packPath = path.join(packsPath, file);

    if (fs.statSync(packPath).isDirectory()) {
        packPaths.push(file);
    }
}

const packs: Pack[] = [];

// Get all sprites in each pack
for (const packPath of packPaths) {
    const pack: Pack = {
        name: packPath,
        datas: [],
        spritesImports: [],
    };

    const kindsPath = path.join(packsPath, packPath);

    for (const kindFolder of fs.readdirSync(kindsPath)) {
        const kindPath = path.join(kindsPath, kindFolder);

        if (!fs.statSync(kindPath).isDirectory()) {
            throw new Error(`Kind ${kindFolder} is not a directory`);
        }

        for (const asset of fs.readdirSync(kindPath)) {
            const assetPath = path.join(kindPath, asset, `${asset}.ts`);

            if (!fs.existsSync(assetPath)) {
                throw new Error(
                    `Asset path exists, but file ${assetPath} does not exist`,
                );
            }

            pack.spritesImports.push(
                `import { ${asset}Data as internal_${asset}Data } from "../packs/${packPath}/${kindFolder}/${asset}/${asset}";`,
            );

            pack.datas.push({
                name: asset,
                import: `internal_${asset}Data`,
                export: `${asset}Data`,
                kind: kindFolder.slice(0, -1),
                imports: {
                    crew: `loadCrew(\"${asset}\");`,
                    pg: `loadSprite(\"${asset}\", \"/crew/${asset}\");`,
                },
            });
        }
    }

    packs.push(pack);
}

// Generate index.ts
const defaultImports = `import { crew } from "@/plugin";
import type { CrewAsset } from "@/types/crew";\n`;

const imports = packs
    .map((pack) => {
        return `// ${pack.name}\n` + pack.spritesImports.join("\n");
    })
    .join("\n\n");

let transformedAssets = ``;

for (const pack of packs) {
    transformedAssets += `// ${pack.name}\n`;

    for (const data of pack.datas) {
        transformedAssets += `export const ${data.export}: CrewAsset = {\n`;
        transformedAssets += `    ...${data.import},\n`;
        transformedAssets += `    kind: "${data.kind}",\n`;
        transformedAssets += `    pack: "${pack.name}",\n`;
        transformedAssets += `    imports: {\n`;
        transformedAssets += `        importInCrew: \"${
            escape(data.imports.crew)
        }\",\n`;
        transformedAssets += `        importInPG: \"${
            escape(data.imports.pg)
        }\",\n`;
        transformedAssets += `    },\n`;
        transformedAssets += `};\n`;
    }
}

let exportAssets = `export const assets = {`;

for (const pack of packs) {
    exportAssets += `\n    // ${pack.name}\n`;

    for (const data of pack.datas) {
        exportAssets += `    ${data.name}: ${data.export},\n`;
    }
}

exportAssets += `} satisfies Record<string, CrewAsset>;\nexport { crew };\n`;

const indexPath = path.join(srcPath, "index.ts");
const indexContent =
    `// This file is generated automatically. Do not edit it manually.\n`
    + "\n"
    + defaultImports
    + "\n"
    + imports
    + "\n"
    + transformedAssets
    + "\n"
    + exportAssets;

fs.writeFileSync(indexPath, indexContent);
console.log("index.ts file generated successfully.");
