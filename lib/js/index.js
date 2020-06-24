const mod = require("./which.js");
module.exports = mod.which;

const {which} = mod.which.FinderTools;
module.exports.which = which;
