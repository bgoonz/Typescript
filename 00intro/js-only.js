const button = document.querySelector("button");
const input1 = document.getElementById("num1");
const input2 = document.getElementById("num2");
const result = document.getElementById("result");

function add(num1, num2) {
  return num1 + num2;
}

button.addEventListener("click", function () {
  let result = add(input1.value, input2.value);
  console.log(result);
  let target = document.getElementById("result");
  target.innerHTML = result;
});
