const mod = require("./which.js");
module.exports = mod.which;

const {which} = mod.which.Tools;
module.exports.which = which;
