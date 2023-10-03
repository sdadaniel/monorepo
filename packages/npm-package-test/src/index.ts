interface add {
  a: number;
  b: number;
}
const add = ({ a, b }: add) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

module.exports = { subtract, add };
