import _ from "@lodash";

const add = (a, b) => {
  return _.add(a, b);
};

const subtract = (a, b) => {
  return a - b;
};

module.exports = { subtract, add };
