var getValue = document.getElementById('getNum');
var btn = document.getElementById('printBtn');
var printer = document.getElementById('tablePrinter');

btn.addEventListener('click', function(event){
    let num = getValue.value , i;
    printer.innerHTML = "";
    printer.style.display = 'block';
    printer.style.whiteSpace = 'pre-line';
    getValue.value = "";
    for(i=1; i<=10; i++) {
        printer.innerHTML += `${num} * ${i} = ${num * i}\n\n`;
    }
});