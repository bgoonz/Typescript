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
  - Any JS object. More specific types (types of objects) are possible in TS: {age: 30}
    > Note typescript only helps you during development and compilation. It does not perform any runtime checks.
    > **Key difference between JS and TS** _Javascript uses dynamic types (resolve at runtime) and Typescript uses static types (set during development)_

###### Important: Type Casing

In TypeScript, you work with types like `string` or `number` all the times.
**Important**: It is `string` and `number` (etc.), **NOT** `String`, `Number` etc.
**The core primitive types in TypeScript are all lowercase!**

- Example:

```ts
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  if (showResult) {
    console.log(phrase + n1 + n2);
  } else {
    return n1 + n2;
  }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
```

> The above code introduces a bug in that by adding the resultPhrase to the two numbers we coerce the result to a string. This is because the resultPhrase is a string and the result of the addition is a number.

- This can be fixed in the following manner...

```ts
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
```

By calculating the result before concatenating it with the resultPhrase we ensure that the result is calculated as a number before it is coerced to a string to be displayed in the console.
**Type Inference** is a way for typescript to automatically infer the type of a variable.

---

##### Object Types:

**In typescript these are essentially the same thing:**

```ts
const person: object = {
  name: "Bryan",
  age: 27,
};
```

- is the same as

```ts
const person: {} = {
  name: "Bryan",
  age: 27,
};
```

- this is what we should provide typescript about our object to avoid an error.

```ts
const person: {
  name: string;
  age: number;
} = {
  name: "Bryan",
  age: 27,
};
```


Nested Objects & Types

Of course object types can also be created for** nested objects**.

Let's say you have this JavaScript **object**:
```js
  const product = {
   id: "abc1",
   price: 12.99,
   tags: ["great-offer", "hot-and-new"],
   details: {
     title: "Red Carpet",
     description: "A great carpet - almost brand-new!",
   },
 };
```
This would be the **type** of such an object:

```ts
const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
};

```

So you have an object type in an object type so to say.
