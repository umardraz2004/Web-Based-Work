const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const display = document.getElementById('watch');
let isRunning = false;
let timer = 0;
let startTime = 0;
let elapsedTime = 0;
startBtn.addEventListener('click', function () {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
});

stopBtn.addEventListener('click', function () {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
});

resetBtn.addEventListener('click', function () {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0
    isRunning = false;
    display.textContent = "00:00:00:00";
});

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    let milliSeconds = Math.floor(elapsedTime % 1000 / 10);
    hours = hours.toString().padStart(2,"0");
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");
    milliSeconds = milliSeconds.toString().padStart(2,"0");
    display.textContent = `${hours}:${minutes}:${seconds}:${milliSeconds}`;
}