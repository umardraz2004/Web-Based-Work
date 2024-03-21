const display = document.getElementById('display');
const keys = document.querySelectorAll('button');

keys.forEach(key => {
    key.addEventListener('click', function (event) {
        const keyValue = event.target.textContent;
        if (keyValue === '=') {
            calculateResult();
        } else if (keyValue === 'C') {
            clearDisplay();
        } else if (keyValue == 'x') {
            removeCharacter();
        } else if (keyValue == 'squ') {
            calculateSquare();
        } else {
            mergeValues(keyValue);
        }
    });
});

function mergeValues(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function removeCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateSquare() {
    const currentValue = parseInt(display.value);
    display.value = currentValue * currentValue;
}
