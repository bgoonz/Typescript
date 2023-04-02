function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  //return type is void because it doesn't return anything
}

printResult(add(5, 12));
console.log(printResult(add(5, 12))); //undefined

let combineValues: (a: number, b: number) => number;

combineValues = add;

console.log(combineValues(8, 8));
