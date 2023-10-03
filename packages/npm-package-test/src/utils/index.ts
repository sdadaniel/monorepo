interface addType {
  a: number;
  b: number;
}
const add = ({ a, b }: addType) => {
  return a + b;
};

const subtract = (a: number, b: number) => {
  return a - b;
};

export { subtract, add };
