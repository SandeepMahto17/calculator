function insert(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace mathematical operators with JavaScript equivalents
        let expression = display.value
            .replace('×', '*')
            .replace('÷', '/')
            .replace('^', '**');
        display.value = eval(expression);
    } catch (error) {
        alert('Invalid Expression');
        clearDisplay();
    }
}
