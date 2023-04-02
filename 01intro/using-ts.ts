const button: HTMLButtonElement = document.querySelector(
  "button"
) as HTMLButtonElement;
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const result = document.getElementById("result") as HTMLDivElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  let result = add(+input1.value, +input2.value);
  console.log(result);
  let target = document.getElementById("result")! as HTMLDivElement;
  target.innerHTML = result.toString();
});
