const shn = require("shark-netlib");
const cr = require("crypto");

module.exports = (url, osha) => {
    const chash = osha ? "sha384" : "sha256";
    console.log(url);
    return new Promise(
        (ok, err) => {
            shn(url, true).then((d) => {
                ok(`${chash}-${cr.createHash(chash).update(d.body).digest("base64")}`)
            }, e => err(`An Error Occured: ${e}`));
        });
};