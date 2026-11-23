import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_WORD = "zugzwang";
const OUTPUT_PATH = "/output/entry.txt";
const word = ENTRY_WORD;

// Gate guard: UTF-8, 1-24 chars, exactly one word, nothing else.

if (word.length < 1 || word.length > 24) {
  throw new Error("word must be 1-24 chars");
}
if (/\s/.test(word)) {
  throw new Error("word must be single word with no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, word, "utf8");
