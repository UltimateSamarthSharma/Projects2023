const items = [
  { name: "Apple", price: 0.49 },
  { name: "Banana", price: 0.99 },
  { name: "Mango", price: 1.49 },
];
function usdToInr(price) {
  return price * 80;
}
const inrPrices = items.map(function (item) {
  const inrPrice = usdToInr(item.price);
  return {
    name: item.name,
    price: item.price,
    inrPrice: inrPrice,
  };
});
const tableBody = document.getElementById("table-body");
inrPrices.forEach(function (item) {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const priceCell = document.createElement("td");
  const inrPriceCell = document.createElement("td");
  const nameText = document.createTextNode(item.name);
  const priceText = document.createTextNode("$" + item.price.toFixed(2));
  const inrPriceText = document.createTextNode("₹" + item.inrPrice.toFixed(2));
  nameCell.appendChild(nameText);
  priceCell.appendChild(priceText);
  inrPriceCell.appendChild(inrPriceText);
  row.appendChild(nameCell);
  row.appendChild(priceCell);
  row.appendChild(inrPriceCell);
  tableBody.appendChild(row);
});