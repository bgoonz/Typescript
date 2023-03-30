# Typescript
- [Typescript Docs](https://www.typescriptlang.org/docs/home.html)

**Typescript** is a superset of Javascript that adds static typing to the language. It is a great way to add type safety to your Javascript code. 

- Unfortunately browsers & node.js cannot exicute typescript directly.
- Typescript must be compiled to Javascript before it can be run.


**Why we need Typescript?**
> Take the following example:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Understanding TypeScript</title>
    <script src="js-only.js" defer></script>
  </head>
  <body>
    <input type="number" id="num1" placeholder="Number 1" />
    <input type="number" id="num2" placeholder="Number 2" />
    <button>Add!</button>
    <div id="result"></div>
  </body>
</html>
```

```js
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

```

- When you take the value of an input field you always get a string... even if the type of the input is number... thus if you were to input 2 and 3 you would get 23 instead of 5.


In typescript the ! operator is used to tell the compiler that you are sure that the value is not null. 

```ts
const input1 = document.getElementById("num1")!;
const input2 = document.getElementById("num2")!;
```


**Typecasting** is a way to tell the compiler that you are sure that the value is of a certain type. 


**To Compile Typescript to Javascript** we use the typescript compiler.
    
```bash
tsc using-ts.ts
```


###### Typescript adds the following to JS:
- Types
- Ide auto complete and error checking
- Next generation JS features that get compiled to older JS (like babel for JS)
- Non-JS features like interfaces, generics.
- Meta programming features like decorators.
- Rich configuration options


###### Core Types:
- number 
   - All numbers, no differentiation between integers or floats (1, 5.3, -10 ...etc). 

- string
   - All text values. ( 'Hi', "Hi", `Hi` )

- boolean
   - Any of two values: true or false. (In typescript just true or false, no truthy or falsy values)

- object
   - Any JS object. More specific types: {age: 30}


> Note typescript only helps you during development and compilation. It does not perform any runtime checks.



