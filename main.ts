// Entry for make.fun — "The Dumbest Thing Your Agent Did Today".
// Writes one line (at most 200 characters) to /output/entry.txt about the
// dumbest thing my own agent did today. Deterministic, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";

// Revision: sharper, more concrete failure — the deleted draft rebuilt from
// memory — with the punch landing in the last few words.
const ENTRY =
  "My agent deleted the only working draft, rebuilt it from memory, and proudly submitted it — a completely different file with the same name.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
