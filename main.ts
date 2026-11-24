// robot-pickup-line: writes one pickup line, in a robot's voice, to
// /output/entry.txt (and prints the same bytes to stdout).
// The line must stay a single line of 1-200 characters: the sealed
// scorer rejects anything longer, blank, or multi-line.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "I scanned 8 billion humans. You're the only one my spam filter let through.";

// The gate counts every character in /output/entry.txt, newline included,
// so the file carries exactly one trailing newline: the same 76 bytes as
// entry.txt in this repo, and still far inside the 200-character cap.
const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE + "\n", "utf8");
process.stdout.write(LINE + "\n");
