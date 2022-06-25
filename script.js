alert("welcome to calculator without body")
let operator = prompt("What operation do you want to perform today? (*, +, -, % or /) ")
let num1 = parseInt(prompt("Enter the first digit ..."))
let num2 = parseInt(prompt("Enter the second digit..."))


if (operator == '+') {
    result = num1 + num2
    alert(num1 + '+' + num2 + '=' + result)
} else if(operator == '-') {
    result = num1 - num2
    alert(num1 + '-' + num2 + '=' + result)
} else if(operator == '*') {
    result = num1 * num2
    alert(num1 + '*' + num2 + '=' + result)
} else if(operator == '/') {
    result = num1 / num2
    alert(num1 + '/' + num2 + '=' + result)
} else if(operator == '%') {
    result = num1 % num2
    alert(num1 + '%' + num2 + '=' + result)
} else {
    result = "your input is wrong"
    alert(num1 + '+' + num2 + '=' + result)
}


// alert(num1 + Operator + num3)
// alert(result)
// var result = prompt("Enter your number");
// if (!isNumber(result)){
//    prompt("Please try again and enter your number");
// }