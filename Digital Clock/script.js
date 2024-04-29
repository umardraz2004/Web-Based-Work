
function updateClock() {
    const clock = document.getElementById('clock');
    const currentTime = new Date();
    let hours = currentTime.getHours();
    const meridian = hours >= 12? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0);
    const minutes = currentTime.getMinutes().toString().padStart(2,0);
    const seconds = currentTime.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    clock.textContent = timeString;
}

updateClock();
setInterval(updateClock,1000);
