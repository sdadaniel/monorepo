import _ from "lodash";

interface addType {
  a: number;
  b: number;
}
const add = ({ a, b }: addType) => {
  return _.add(a, b);
};

const subtract = (a: number, b: number) => {
  return a - b;
};

export { subtract, add };
