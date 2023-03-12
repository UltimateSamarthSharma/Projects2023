const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
  const discount = originalPrice - discountedPrice;
  const discountPercentage = (discount / originalPrice) * 100;
  return discountPercentage.toFixed(2);
};
const originalPrice = parseInt(prompt("Enter the original price:"));
const discountedPrice = parseInt(prompt("Enter the discounted price:"));
const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
document.write(`The discount percentage is ${discountPercentage}%`);