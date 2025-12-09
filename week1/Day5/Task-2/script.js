function calculate(operation) {
    const num1 = document.getElementById("num1").value.trim();
    const num2 = document.getElementById("num2").value.trim();
    const alertMsg = document.getElementById("alertMsg");
    const result = document.getElementById("result");

    // Clear previous messages
    alertMsg.textContent = "";
    result.textContent = "";

    // Validation
    if (num1 === "" || num2 === "") {
        alertMsg.textContent = "Please enter both numbers!";
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res;

    switch(operation) {
        case 'add':
            res = number1 + number2;
            break;
        case 'subtract':
            res = number1 - number2;
            break;
        case 'multiply':
            res = number1 * number2;
            break;
        case 'divide':
            if(number2 === 0){
                alertMsg.textContent = "Cannot divide by zero!";
                return;
            }
            res = number1 / number2;
            break;
        default:
            res = "Invalid Operation";
    }

    result.textContent = `Result: ${res}`;
}
