const add = (a, b) => {
  console.log(a, b);
  return a + b;
};

const subtract = (a, b) => {
  console.log(a, b);
  console.log("subtract!");
  return a - b;
};

module.exports = { subtract, add };
