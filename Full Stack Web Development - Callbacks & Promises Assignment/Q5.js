function greet(name) {
  return new Promise((resolve, reject) => {
    if (typeof name === "string") {
      resolve(`Hello, ${name}!`);
    } else {
      reject("Invalid input. Please provide a valid name.");
    }
  });
}
greet("Mithun")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });