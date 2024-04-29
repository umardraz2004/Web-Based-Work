const inputValue = document.getElementById('textBox');
const toCelsius = document.getElementById('toCelsius');
const toFahrenheit = document.getElementById('toFahrenheit');
const subBtn = document.getElementById('subBtn');
const result = document.getElementById('result');

subBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let unit = Number(inputValue.value);
    let ans;
    if (isNaN(unit)) {
        result.textContent = "Enter a number";
    }
    else if (toCelsius.checked) {
        ans = (unit - 32) * 5 / 9;
        result.textContent = `Answer: ${ans} °C`;
        inputValue.value = "";
    }
    else if (toFahrenheit.checked) {
        ans = (9 / 5 * unit) + 32;
        result.textContent = `Answer: ${ans} °F`;
        inputValue.value = "";
    }
    else {
        result.textContent = "Select a option";
    }
});