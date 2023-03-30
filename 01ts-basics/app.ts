const person: {
  name: string;
  age: number;
  hobbies: string[];
} = {
  name: "Bryan",
  age: 27,
  hobbies: ["Sports", "Cooking"],
};

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());// Sports, Cooking
    }
