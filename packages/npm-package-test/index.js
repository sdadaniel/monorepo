const add = (a, b) => {
  console.log(a, b);
  console.log("as");
  return a + b;
};

const subtract = (a, b) => {
  console.log(a, b, 1);
  return a - b;
};

module.exports = { subtract, add };
