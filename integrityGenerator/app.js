#!/usr/bin / env node
const { program, option } = require("commander");
const p = require("./package.json");
program
    .version(p.version)
    .requiredOption('-u, --url <urltofile>', 'The Url to the File')
    .option("-384, --sha384", "Use sha384 instead of sha256")
    .name(p.name)
    .parse();
const options = program.opts();

console.log("\n");
require("./mygen")(options.url, options.sha384).then(console.log, console.error);
