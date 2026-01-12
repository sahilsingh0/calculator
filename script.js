let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
    if (display.innerText === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    display.innerText = currentInput;
}

function appendOperator(operator) {
    currentInput += " " + operator + " ";
    display.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    display.innerText = "0";
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || "0";
}

function calculateResult() {
    try {
        let result = eval(currentInput);
        display.innerText = result;
        currentInput = result.toString();
    } catch {
        display.innerText = "Error";
        currentInput = "";
    }
}
