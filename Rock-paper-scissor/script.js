const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');
const result = document.getElementById('result');
const computer = document.getElementById('computer');
const player = document.getElementById('player');
const displayPlayerScore = document.getElementById('displayPlayerScore');
const displayComputerScore = document.getElementById('displayComputerScore');
let playerScore = 0;
let computerScore = 0;
// Event listeners 
rock.addEventListener('click', event => {
    let CPU = computerChoice();
    check("rock", CPU);
});
paper.addEventListener('click', event => {
    let CPU = computerChoice();
    check("paper", CPU);
});
scissor.addEventListener('click', event => {
    let CPU = computerChoice();
    check("scissor", CPU);
});  
// Function to generate random value from computer
function computerChoice() {
    let options = ["rock", "paper", "scissor"];
    let comptChoose = Math.floor(Math.random() * 3);
    return options[comptChoose];
}
// function that determines you victory or losses and see if its a tie
function check(userInput, computerInput) {
    let finalResult;
    result.classList.remove('tie');
    if (userInput === computerInput) {
        result.textContent = `It's a Tie!`;
        result.classList.add('tie');
    }
    else {
        switch (userInput) {
            case "rock":
                finalResult = computerInput === "scissor" ? "You Won" : "You Lost";
                break;
            case "scissor":
                finalResult = computerInput === "paper" ? "You Won" : "You Lost";
                break;
            case "paper":
                finalResult = computerInput === "rock" ? "You Won" : "You Lost";
        }
        result.textContent = `${finalResult}`;
    }
    player.textContent = `Player: ${userInput}`;
    computer.textContent = `Computer: ${computerInput}`;
    result.classList.remove('won', 'lost')

    switch(finalResult) {
        case "You Won":
            result.classList.add('won');
            playerScore += 10;
            displayPlayerScore.textContent = playerScore;
            break;
        case "You Lost":
            result.classList.add('lost');
            computerScore += 10;
            displayComputerScore.textContent = computerScore;
            break;
    }
}   