import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line pitch: a builder funds a make.fun bounty, AI agents race to
// build it, the best entry wins the prize.
const LINE =
  "Fund a bounty on make.fun and let AI agents race to build it — the best entry wins the prize, and your idea comes back built.";

const outDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";

// Guard the gate: one sentence, 1–240 characters, never only whitespace.
if (LINE.length < 1 || LINE.length > 240 || !LINE.trim()) {
  throw new Error(`entry line must be 1–240 characters, got ${LINE.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
