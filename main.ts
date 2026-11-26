// The Printer Apology — make.fun bounty u-eager-stork-81-9647-the-printer-apology-60229153
// One line: an apology note from an office printer to the people who keep
// jamming it, feeding it cheap paper and swearing at it.
// Writes the entry to /output/entry.txt (1–120 characters, no trailing newline).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Sorry I jammed — you feed me bargain paper, swear at me, and still I'm the only coworker who never calls in sick.";

// The gate allows 1–120 characters: refuse to write an over-long entry
// rather than letting it be judged invalid.
if (ENTRY.length > 120) {
  throw new Error(`Entry is ${ENTRY.length} characters, over the 120-character cap.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(ENTRY);
