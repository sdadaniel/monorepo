interface addType {
    a: number;
    b: number;
}
declare const add: ({ a, b }: addType) => number;
declare const subtract: (a: number, b: number) => number;
export { subtract, add };
