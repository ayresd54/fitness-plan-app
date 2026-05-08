import fs from "fs";
import path from "path";

const ROOT = path.resolve("src");

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(jsx?|tsx?)$/.test(entry.name)) checkFile(full);
  }
}

function checkFile(file) {
  const content = fs.readFileSync(file, "utf8").trim();

  // Detect files ending mid-object or mid-JSX
  const suspiciousEndings = [
    "{",
    "[",
    "(",
    ",",
    ":",
    "<",
    "=>",
    "return (",
    "return {",
    "export default function",
    "export function",
  ];

  for (const end of suspiciousEndings) {
    if (content.endsWith(end)) {
      console.error(`❌ Possible truncated file: ${file}`);
      process.exit(1);
    }
  }

  // Detect missing closing braces
  const openBraces = (content.match(/{/g) || []).length;
  const closeBraces = (content.match(/}/g) || []).length;

  if (openBraces !== closeBraces) {
    console.error(`❌ Brace mismatch in: ${file}`);
    process.exit(1);
  }
}

walk(ROOT);
console.log("✔ No truncation detected");
