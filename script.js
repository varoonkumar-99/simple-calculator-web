const display = document.getElementById('display');

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        // Evaluate the string expression
        // Using a Function constructor is safer than eval() for basic tasks
        const result = eval(display.value);
        
        if (result === Infinity || isNaN(result)) {
            display.value = "Error"; // Handles Division by Zero
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Error"; // Handles malformed expressions
    }
}
