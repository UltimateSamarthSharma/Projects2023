function calculateRentalCost(numDays, carType) {
  let rentalCost;
  switch (carType) {
    case "economy":
      rentalCost = 4000;
      break;
    case "midsize":
      rentalCost = 10000;
      break;
    case "luxury":
      rentalCost = 20000;
      break;
    default:
      return "Invalid car type.";
  }
  return rentalCost * numDays;
}
const days = parseInt(prompt("Enter number of days:"));
const car = prompt("Enter car type:").toLowerCase();
const result = calculateRentalCost(days, car);
document.write(`Number of days rented: ${days}<br>Entered car type: ${car}<br>Total cost: Rs.${result}/-`);