const { execSync } = require("child_process");
const path = require("path");

const files = process.argv
  .slice(2)
  .map((f) => f.replace(/\\/g, "/").replace(/^.*frontend\//, ""));
if (files.length === 0) process.exit(0);

const cwd = path.join(__dirname, "..", "frontend");
const filesArg = files.map((f) => JSON.stringify(f)).join(" ");

execSync(`npx eslint --fix ${filesArg}`, { cwd, stdio: "inherit" });
execSync(`npx prettier --write ${filesArg}`, { cwd, stdio: "inherit" });
