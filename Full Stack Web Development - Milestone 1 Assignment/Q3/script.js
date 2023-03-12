let color1 = prompt("Enter color 1:");
let color2 = prompt("Enter color 2:");

let result;

switch (color1) {
  case "red":
    switch (color2) {
      case "blue":
        result = "purple";
        break;
      case "yellow":
        result = "orange";
        break;
      default:
        document.write("Invalid color combination");
    }
    break;
  case "blue":
    switch (color2) {
      case "red":
        result = "purple";
        break;
      case "yellow":
        result = "green";
        break;
      default:
        document.write("Invalid color combination");
    }
    break;
  case "yellow":
    switch (color2) {
      case "red":
        result = "orange";
        break;
      case "blue":
        result = "green";
        break;
      default:
        document.write("Invalid color combination");
    }
    break;
  default:
    document.write("Invalid color combination");
}

if (result) {
  document.write(`Result==> ${color1} + ${color2} = ${result}`);
}