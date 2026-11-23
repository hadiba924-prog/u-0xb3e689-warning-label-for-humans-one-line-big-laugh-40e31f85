// Warning Label for Humans: One Line, Big Laugh.
// A tiny Node program that writes one single-line safety warning label
// for human beings to the output file the grader reads.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The label: a real warning-label voice, a universal human truth,
// and the laugh lands on the last few words.
const label =
  "WARNING: This human will nod like they understood, then Google it in the bathroom.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), label, "utf8");
console.log(`Wrote ${label.length} characters to ${join(outDir, "entry.txt")}`);
