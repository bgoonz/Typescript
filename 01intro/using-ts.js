var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
var result = document.getElementById("result");
function add(num1, num2) {
  return num1 + num2;
}
button.addEventListener("click", function () {
  var result = add(+input1.value, +input2.value);
  console.log(result);
  var target = document.getElementById("result");
  target.innerHTML = result.toString();
});
