(function () {
  let logger = document.getElementById("log")!;
  console.log = function () {
    for (let i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] == "object") {
        logger.innerHTML +=
          (JSON && JSON.stringify
            ? JSON.stringify(arguments[i], undefined, 2)
            : arguments[i]) + "<br />";
      } else {
        logger.innerHTML += arguments[i] + "<br />";
      }
    }
  };
})();
//-----------------------------------------------------------------
const add = (a: number, b: number) => {
  return a + b;
};

const printOutput = (output: string | number) => {
    console.log(output);
}

const button = document.querySelector('button');

if (button) {
    button.addEventListener('click', event => console.log(event));
}

printOutput(add(5, 2));
