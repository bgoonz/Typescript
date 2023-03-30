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

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // Sports, Cooking
}
