import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = fileURLToPath(new URL(".", import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");
const text = "On the kitchen table: a warm loaf, a letter addressed to you, and a key for a door this house never had.\nThe key is cold.";
mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, text, "utf8");
console.log(`wrote ${entryPath} (${[...text].length} chars, ${Buffer.byteLength(text, "utf8")} bytes) from ${scriptDir}`);
