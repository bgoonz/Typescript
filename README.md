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
- Array
  - Any JS array `[1, 2, 3]`. More specific types (types of arrays) (can be flexible or strict in terms of the types of elements in the array) are possible in TS:
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

## So you have an object type in an object type so to say.

##### Arrays:

- Arrays in typescript are defined in the following manner:
- if the array's elements are strings it would be as follows: ` hobbies: string[]`

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Bryan",
  age: 27,
  hobbies: ["Sports", "Cooking"],
};
```

---

##### Tuples:

- A tuple is an array of fixed length and fixed type.

```ts
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // Tuple
} = {
  name: "Bryan",
  age: 27,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};
```

> in the above example the role property on the person object is an exampe of a tuple. The order of the elements is important. If we were to change the order of the elements in the tuple we would get an error.
> In the example above length is enforced if we were to add the wrong data type to the wrong field... i.e. `person.role[1]=10` because role is supposed to be a string... but unfortunatly this would not be enforced with the push method... i.e. `person.role.push("admin")` this would not throw an error because the push method is not enforced by typescript. This is because the push method is a method that is available on all arrays and not just tuples.

---

##### Enums:

- Enums allow us to define a set of named constants. Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides a way to create enums.
- Often we see enums with all uppercase names, but that's not required.
  example of enum: `enum Role { ADMIN, READ_ONLY, AUTHOR };` where ADMIN gets the value 0, READ_ONLY gets the value 1 and AUTHOR gets the value 2.
- We can also set the values of the enums ourselves. example: `enum Role { ADMIN = 5, READ_ONLY, AUTHOR };` where ADMIN gets the value 5, READ_ONLY gets the value 6 and AUTHOR gets the value 7.

---

##### Any:

- The any type is a powerful way to work with existing JavaScript, allowing you to gradually opt-in and opt-out of type checking during compilation. You might expect object to play a similar role, as it does in other languages. However, variables of type object only allow you to assign any value to them - you can’t call arbitrary methods on them, even ones that actually exist:

---

##### Union Types:

- Union types allow us to have more than one type for a variable. example: `let myRealRealAge: number | string;` this means that the variable myRealRealAge can be a number or a string.
  > ex.)

```ts
function combine(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}
const combineAges = combine(30, 26);
console.log(combineAges);
```

> this breakes down if we want to combine strings and will throw an error saying that the function combine cannot take strings as an argument, that's where union types come in handy.

```ts
function combine(input1: number, input2: number) {
  const result = input1 + input2;
  return result;
}
const combineAges = combine(30, 26);
console.log(combineAges);
const combineNames = combine("Bryan", "Anna");
```


> Combine either numbers or strings with typescript:

```ts
function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
}

const combineAges = combine(30, 26);
console.log(combineAges);

const combineNames = combine("Bryan", "Anna");
console.log(combineNames);

```

##### Literal Types:

> 1st approach... do calculation and then convert result to desired output type.

```ts
function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "as-number") {
    return +result;
  } else {
    return result.toString();
  }
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Bryan", "Anna", "as-text");
console.log(combineNames);
```

> 2nd approach... use union of literal types.
i.e. `resultConversion: "as-number" | "as-text"`


```ts

function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
    return result;

}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Bryan", "Anna", "as-text");
console.log(combineNames);
```

---

##### Type Aliases (Custom Types):

- Type aliases create a new name for a type. Type aliases are sometimes similar to interfaces, but can name primitives, unions, tuples, and any other types that you’d otherwise have to write by hand.

> example of type alias:
- uses the keyword `type` instead of `interface` and can be used with union types.
```ts
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combineStringAges = combine("30", "26", "as-number");
console.log(combineStringAges);

const combineNames = combine("Bryan", "Anna", "as-text");
console.log(combineNames);
```

**Type Aliases & Object Types**
Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

For example:

```ts
type User = { name: string; age: number };
const u1: User = { name: 'Bryan', age: 27 }; // this works!
```

This allows you to avoid unnecessary repetition and manage types centrally.

For example, you can simplify this code:

```ts
function greet(user: { name: string; age: number }) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}
``` 
> To this:

```ts
type User = { name: string; age: number };
 
function greet(user: User) {
  console.log('Hi, I am ' + user.name);
}
 
function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
```


---

##### Function Return Types & "void":

- Functions can return a value or not return a value. If a function does not return a value, it is of type void. This is the default return type of a function.

```ts
function printResult(num: number): void {
    console.log("Result: " + num);
        //return type is void because it doesn't return anything
}

printResult(add(5, 12));
```


- You can tell typescript what type of value a function will return by adding a colon and the type after the closing parenthesis of the function's arguments.


```ts
function add(n1: number, n2: number): number {
    return n1 + n2;
}

```

```ts
function add(n1: number, n2: number): number {
    return n1 + n2;
}


function printResult(num: number): void {
    console.log("Result: " + num);
    //return type is void because it doesn't return anything
}

printResult(add(5, 12));
console.log(printResult(add(5, 12)));//undefined

```

- Intrestingly if you console.log `console.log(printResult(add(5, 12)));//undefined` you'll see that the function returns `undefined` even though it doesn't return anything. 

- Void makes it clear that a function deliberatly does not return anything. 


- We can tell typescript to expect a variable to hold a function by using the `Function` keyword .

```ts
let combineValues: Function;

combineValues = add;

console.log(combineValues(8, 8));
```

- this could introduce errors that typescript won't detect... for example we could store a function that only takes one value as a parameter and typescript won't complain because it was expecting a function and it got a function.

- This can be corrected by doing the following:

```ts
let combineValues: (a:number,b:number) =>number;
```

- This tells typescript that the variable `combineValues` will hold a function that takes two numbers and returns a number.



---

##### Unknown Type:

- The `unknown` type is a type-safe counterpart to `any`. Any value is assignable to `unknown`, but `unknown` isn’t assignable to anything but itself and `any` without a type assertion or a control flow based narrowing. Likewise, no operations are permitted on an `unknown` without first asserting or narrowing to a more specific type.


```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Bryan";

userName = userInput; //Type 'unknown' is not assignable to type 'string'.
```


---

##### Never Type:

- The `never` type represents the type of values that never occur. For instance, `never` is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns; Variables also acquire the type `never` when narrowed by any type guards that can never be true.

```ts
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}
```
