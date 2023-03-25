function convertToNumber(str)
{
  try
  {
    const num = parseFloat(str);
    if (isNaN(num))
    {
      throw new Error("Invalid number");
    }
    return num;
  }
  catch (error)
  {
    return error.message;
  }
}
const result1 = convertToNumber("123.45");
console.log(result1);
const result2 = convertToNumber("invalid");
console.log(result2);