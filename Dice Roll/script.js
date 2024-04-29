const input = document.getElementById('inputValue');
const button = document.getElementById('rollDice');
const text = document.getElementById('diceText');
const image = document.getElementById('diceImage');
const rollDice = document.getElementById('rollDice');

rollDice.addEventListener('click', function(e){
    let value = input.value;
    if(value == "") {
        alert("Enter a number!");
    } else if(value > 10) {
        alert("Out of order!");
        location.reload();
    }
    else {

        let values = [];
        let images = [];
        input.value = "";
        for(let i=0; i<value ; i++) {
            const randomValues = Math.floor(Math.random() * 6) + 1;
            values.push(randomValues);
            images.push(`<img src="img/${randomValues}.jpg" alt="Error">`);
        }
        text.textContent = `Dice: ${values.join(", ")}`;
        image.innerHTML =    images.join('');
    }
});


