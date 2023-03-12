function printPattern()
{
  let rows = parseInt(document.getElementById("rows").value);
  let pattern = "";
  for (let i = rows; i >= 1; i--)
  {
    for (let j = 1; j <= i; j++)
    {
      pattern += "*";
    }
    pattern += "\n";
  }
  document.getElementById("pattern").innerText = pattern;
}