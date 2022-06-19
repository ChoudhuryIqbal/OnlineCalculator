function add(a, b) {
    return a + b;

}

function subtract(a, b) {
    return a - b;

}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function operator(operation, firstNum, secondNum) {
    let result;
    if (operation == "+") {
        result = add(firstNum, secondNum);
        console.log(result)

    } else if (operation == '-') {
        result = subtract(firstNum, secondNum);
        console.log(result)
    } else if (operation == "/") {
        result = divide(firstNum, secondNum)
        console.log(result)
    } else if (operation == "*") {
        result = multiply(firstNum, secondNum)
        console.log(result)
    } else {
        console.log("Something is wrong ")
    }
}