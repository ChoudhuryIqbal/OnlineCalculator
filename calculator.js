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

    if (operation == "+") {
        const resultAdd = add(firstNum, secondNum)
        return resultAdd;
    } else if (operation == '-') {
        const resutlSub = subtract(firstNum, secondNum)
        return resutlSub;
    } else if (operation == "/") {
        const resultDivide = divide(firstNum, secondNum)
        return resultDivide;
    } else if (operation == "*") {
        const resultMultiply = multiply(firstNum, secondNum)
        return resultMultiply;
    } else {
        return "Something is wrong ";
    }
}