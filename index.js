
let startBtn = document.getElementById("startButton");
let pauseBtn = document.getElementById("pauseButton");
let resetBtn = document.getElementById("resetButton");
let timeLb = document.getElementById("timeLabel")

let initialTime = 0;
let timePassed = 0;
let hours = 0;
let minuts = 0;
let seconds = 0;
let paused = true;
let interval;

startBtn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        initialTime = Date.now() - timePassed;

        interval = setInterval(timeUpdate, 1000);
        startBtn.style.display = "none";
        pauseBtn.style.display = "unset";
        
    }
});

pauseBtn.addEventListener("click", () => {
    if (!paused){
        paused = true;
        clearInterval(interval);
        pauseBtn.style.display = "none";
        startBtn.style.display = "unset";
    }
});

resetBtn.addEventListener("click", () => {
   hours = 0;
   minuts = 0;
   seconds = 0;
   timePassed = 0;
   paused = true;
   initialTime = 0; 
   clearInterval(interval);
   timeLb.textContent = "00:00:00";
});

function timeUpdate() {
    timePassed = Date.now() - initialTime;

    seconds = Math.floor((timePassed / 1000) % 60);
    minuts = Math.floor((timePassed / (1000 * 60)) % 60);
    hours = Math.floor((timePassed / (1000 * 60 * 60)) % 60);

    seconds = addZeros(seconds);
    minuts = addZeros(minuts);
    hours = addZeros(hours);


    timeLb.textContent = `${hours}:${minuts}:${seconds}`;

    function addZeros(number) {
        return ("0" + number).length > 2 ? number : "0" + number;
    }

}