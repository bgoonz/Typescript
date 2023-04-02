let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Bryan";
if (typeof userInput === "string") {
  userName = userInput;
}

// userName = userInput; //Type 'unknown' is not assignable to type 'string'.
