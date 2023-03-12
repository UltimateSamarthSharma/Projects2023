function removeDuplicates(cart)
{
  let uniqueCart = [];
  for (let i = 0; i < cart.length; i++)
  {
    if (!uniqueCart.includes(cart[i]))
    {
      uniqueCart.push(cart[i]);
    }
  }
  return uniqueCart;
}
const item1 = prompt("Enter item 1:");
const item2 = prompt("Enter item 2:");
const item3 = prompt("Enter item 3:");
const item4 = prompt("Enter item 4:");
const item5 = prompt("Enter item 5:");
const cartWithDuplicates = [item1,item2,item3,item4,item5];
document.write(`Items entered in the cart, with duplicate items are:<br>${cartWithDuplicates}<br><br>`)
const cartWithoutDuplicates = removeDuplicates(cartWithDuplicates);
document.write(`Items entered in the cart, with non-duplicate items are:<br>${cartWithoutDuplicates}`)