var inputField = document.getElementById('count');
var incBtn = document.getElementById('increase');
var resetBtn = document.getElementById('reset');
var decBtn = document.getElementById('decrease');
var count = 0;

incBtn.addEventListener('click', function(event) {
    count++;
    inputField.value = count;
});

resetBtn.addEventListener('click', function(event) {
    inputField.value = '';
    count = 0;
});

decBtn.addEventListener('click', function(event) {
    count--;
    inputField.value = count;
});