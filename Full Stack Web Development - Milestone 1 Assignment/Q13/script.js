function calculateBill(costPerDish, numPeople) {
  const totalBill = costPerDish * numPeople;
  const billPerPerson = totalBill / numPeople;
  return {
    totalBill: totalBill,
    billPerPerson: billPerPerson
  };
}
let cost_per_dish = parseInt(prompt("Enter cost per dish:"));
let number_of_persons = parseInt(prompt("Enter number of persons:"));
const billInfo = calculateBill(cost_per_dish, number_of_persons);
document.write(`Bill per person: Rs.${billInfo.billPerPerson}/-<br>`);
document.write(`Total bill: Rs.${billInfo.totalBill}/-`);