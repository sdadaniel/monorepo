import _ from "lodash";
var add = function (_a) {
    var a = _a.a, b = _a.b;
    return _.add(a, b);
};
var subtract = function (a, b) {
    return a - b;
};
module.exports = { subtract: subtract, add: add };
