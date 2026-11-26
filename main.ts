// One Line, One Laugh — writes a single funny line (1-140 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I asked my smart speaker for life advice. It paused, then said, \"Have you tried turning yourself off and on again?\"";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the gate counts characters, so write the line exactly.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
