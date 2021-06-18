let arr = [];
let num1 = 0
let num2 = 0
let result = 0;

function calc(op,d){
  arr = d.split(op);
  num1 = arr[0];
  num2 = arr[1];
  
  switch (op) {
    case "+":
      result = Number(num1)+Number(num2)
      console.log(result);
      break;
    case "x":
      result = num1*num2
      console.log(result);
      break;
    case "÷":
      result = num1/num2
      console.log(result);
      break;
    case "-":
      result = num1-num2
      console.log(result);
      break;
      
    default:
      break;
  }
  return result;
}

export default calc;