let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time")

function padStart(value) {
return String(value).pasStart(2, "0")
}

function setTime() {
    const minutes = Math.floor(secondsElapsed / 60)
    const seconds = secondsElapsed % 60
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function timer() {
    secondsElapsed++;
}

function startClock() {
  if (interval)  stopClock()
    interval = setInterval(timer, 1000)
}

function stopClock() {
    clearInterval(interval)
}

function resetClock() {
    stopClock()
    seconsElapsed = 0;
    setTime()
}
