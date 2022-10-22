// This script just updates all integrity hashes. Use with "node updateThis"
const g = require("./mygen"),
  fs = require("fs"),
  { resolve } = require("path");

(() => {
  const jsonPath = [__dirname, "..", "docs", "framework", "blazor.boot.json"];

  const path = resolve(...jsonPath);

  if (!fs.existsSync(path)) {
    console.error(`File \"${jsonPath}\" not found!`);
    return;
  }
  try {
    let jsd = JSON.parse(fs.readFileSync(path));
    function doi(k, u, se) {
      const _k = Object.keys(jsd.resources[k]);
      let f = null;
      for (let r of _k) {
        f = g(u.concat(r), se);
        console.log("Hash of file ".concat(r, " is ", f));
        jsd.resources[k][f] = f;
      }
    }
    doi(
      "assembly",
      "https://sharkbyteprojects.github.io/github-stats-sharkbyteprojects/framework/bin/",
      0
    );

    fs.copyFileSync(path, path.concat(".old"));
    fs.writeFileSync(path, Buffer.from(JSON.stringify(jsd), "utf8"));
  } catch (ex) {
    console.error("Error: ".concat(ex));
  }
})();
