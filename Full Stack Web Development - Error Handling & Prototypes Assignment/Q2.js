function getPerson(obj)
{
  try
  {
    if (typeof obj !== "object" || !(obj.hasOwnProperty("name")) || !(obj.hasOwnProperty("age")))
    {
      throw new Error("Invalid parameter type");
    }
    const { name, age } = obj;
    return `Name: ${name}, Age: ${age}`;
  }
  catch (error)
  {
    return error.message;
  }
}
const person1 = { name: "Alice", age: 30 };
const result1 = getPerson(person1);
console.log(result1);
const person2 = { name: "Bob" };
const result2 = getPerson(person2);
console.log(result2);
const person3 = "Invalid";
const result3 = getPerson(person3);
console.log(result3);