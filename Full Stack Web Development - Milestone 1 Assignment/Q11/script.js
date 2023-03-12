function celsiusToFahrenheit(celsius)
{
  const fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const celsius = parseInt(prompt("Enter an integer value in Celsius:"))
const fahrenheit = parseFloat(celsiusToFahrenheit(celsius));
document.write(`${celsius}°C is equal to ${fahrenheit}°F`);