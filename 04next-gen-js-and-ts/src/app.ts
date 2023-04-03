const userName = "Bryan";
// userNames = "Bryan"; <-- error
let age = 27;

age = 30;

function add(a: number, b: number) {
  let result;
  result = a + b;
  return result;
}
// with var you can access the variable outside the scope it was declared in.
if(age > 20) {
  let isOld = true;
}

console.log(isOld);
// console.log(result) <-- error
