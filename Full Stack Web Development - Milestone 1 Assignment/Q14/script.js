let cart = [];
let n = parseInt(prompt("Enter number of items:"));
for (let i = 1; i <= n; i++) {
  let unitPrice = prompt(`Enter the unit price for item ${i}:`);
  let quantity = prompt(`Enter the quantity for item ${i}:`);
  cart.push({unitPrice: Number(unitPrice), quantity: Number(quantity)});
}
const calculateTotalCost = (cart) => {
  let totalCost = 0;
  for (let item of cart) {
    totalCost += item.unitPrice * item.quantity;
  }
  return totalCost;
}
let totalCost = calculateTotalCost(cart);
document.write(`The total cost of items in the cart is: Rs.${totalCost}/-`);