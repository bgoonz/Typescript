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



const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(2, 5));
