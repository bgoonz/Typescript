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
// const add = (a: number, b: number = 5) => {
//   return a + b;
// };
// 
// const printOutput = (output: string | number) => {
//     console.log(output);
// }
// 
// const button = document.querySelector('button');
// 
// if (button) {
//     button.addEventListener('click', event => console.log(event));
// }
// 
// printOutput(add(5));
// 
// 
// const hobbies = ['guitar', 'coding', 'reading', 'cooking', 'hockey'];
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// 
// const activeHobbies = ["hiking"];
// activeHobbies.push (...hobbies);
// 
// console.log(...activeHobbies);

const person = {
    firstName: 'Bryan',
    age: 27
};

const pointerToPersonObj = person;

const copiedPerson = {...person};


const add = (...numbers:number[]) =>{
  
    const result =numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
        }, 0);
    return result;
}
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
