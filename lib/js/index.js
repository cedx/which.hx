const mod = require("./which.js");
module.exports = mod.which;

const {which} = mod.which.Main;
module.exports.which = which;
