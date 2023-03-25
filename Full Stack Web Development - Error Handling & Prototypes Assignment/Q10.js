function filterByCategory(products)
{
  return function (category)
  {
    return products.filter((product) => product.category === category);
  };
}
const myProducts = [
  { name: "Peter England", category: "Clothing" },
  { name: "Zebronics", category: "Electronics" },
  { name: "Jack & Jones", category: "Clothing" },
  { name: "LEGO", category: "Toys" },
  { name: "Xiaomi", category: "Electronics" },
];
const filterClothing = filterByCategory(myProducts);
console.log(filterClothing("Clothing"));
console.log(filterClothing("Toys"));
console.log(filterClothing("Food"));