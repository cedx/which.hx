const adapter = require("./adapter.js");
const bundle = require("./bundle.js");

module.exports = bundle.which;
module.exports.which = adapter.which;
