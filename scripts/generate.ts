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

    const spritesPath = path.join(packsPath, packPath, "Sprites");

    for (const spriteFolder of fs.readdirSync(spritesPath)) {
        const spritePath = path.join(
            spritesPath,
            spriteFolder,
            `${spriteFolder}.ts`,
        );

        if (fs.existsSync(spritePath)) {
            const spriteImport =
                `import { ${spriteFolder}Data as internal_${spriteFolder}Data } from "../packs/${packPath}/Sprites/${spriteFolder}/${spriteFolder}";`;

            pack.spritesImports.push(spriteImport);
            pack.datas.push({
                name: spriteFolder,
                import: `internal_${spriteFolder}Data`,
                export: `${spriteFolder}Data`,
                kind: "Sprite",
                imports: {
                    crew: `loadCrew(\"${spriteFolder}\");`,
                    pg: `loadSprite(\"${spriteFolder}\", \"/crew/${spriteFolder}\");`,
                },
            });
        }
    }

    packs.push(pack);
}

// Generate index.ts
const imports = packs
    .map((pack) => {
        return `// ${pack.name}\n` + pack.spritesImports.join("\n");
    })
    .join("\n\n");

let transformedAssets = ``;

for (const pack of packs) {
    transformedAssets += `// ${pack.name}\n`;

    for (const data of pack.datas) {
        transformedAssets += `export const ${data.export} = {\n`;
        transformedAssets += `    ...${data.import},\n`;
        transformedAssets += `    kind: "${data.kind}",\n`;
        transformedAssets += `    pack: "${pack.name}",\n`;
        transformedAssets += `    imports: {\n`;
        transformedAssets += `        importInCrew: \"${
            escape(data.imports.crew)
        }\",\n`;
        transformedAssets += `        importInPlayground: \"${
            escape(data.imports.pg)
        }\",\n`;
        transformedAssets += `    },\n`;
        transformedAssets += `};\n\n`;
    }
}

let exportAssets = `export const assets = {`;

for (const pack of packs) {
    exportAssets += `\n    // ${pack.name}\n`;

    for (const data of pack.datas) {
        exportAssets += `    ${data.name}: ${data.export},\n`;
    }
}

exportAssets += `};\n\n`;

const indexPath = path.join(srcPath, "index.ts");
const indexContent =
    `// This file is generated automatically. Do not edit it manually.`
    + "\n\n"
    + imports
    + "\n\n"
    + transformedAssets
    + "\n\n"
    + exportAssets;

fs.writeFileSync(indexPath, indexContent);
console.log("index.ts file generated successfully.");
