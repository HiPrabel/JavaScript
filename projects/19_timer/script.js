const resetBtn = document.querySelector("#reset");
const playBtn = document.querySelector("#play");
const timerEl = document.querySelector("#timer");
const root = document.querySelector(":root");
const setTimeInput = document.querySelector("#setTime");

let totalSeconds = 60;
let playing = false;
let currentSeconds = totalSeconds;
let timerInterval;

timerEl.innerText = formatTime(totalSeconds);

// Start/Pause Timer
playBtn.addEventListener("click", () => {
  playing = !playing;

  if (playing) {
    playBtn.classList.add("bg-green-500");
    startTimer();
  } else {
    playBtn.classList.remove("bg-green-500");
    clearInterval(timerInterval);
  }

  togglePlayIcon();
});

// Reset Timer
resetBtn.addEventListener("click", resetAll);

// Set Timer from Input
setTimeInput.addEventListener("change", () => {
  const newTime = parseInt(setTimeInput.value);
  if (!isNaN(newTime) && newTime > 0) {
    totalSeconds = newTime;
    currentSeconds = totalSeconds;
    resetAll();
  }
});

// Timer function
function startTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (currentSeconds > 0) {
      currentSeconds--;
      updateTimer();
    } else {
      clearInterval(timerInterval);
      triggerAnimation();
      resetAll();
    }
  }, 1000);
}

// Update Timer Display
function updateTimer() {
  timerEl.innerText = formatTime(currentSeconds);
  root.style.setProperty("--degrees", calcDeg());
}

// Format time into MM:SS
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const newSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
}

// Calculate rotation degrees
function calcDeg() {
  return `${360 - (currentSeconds / totalSeconds) * 360}deg`;
}

// Toggle play/pause icon
function togglePlayIcon() {
  const playIcon = playBtn.querySelector("i");
  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");
}

// Reset Timer
function resetAll() {
  playing = false;
  clearInterval(timerInterval);
  playBtn.classList.remove("bg-green-500");
  timerEl.classList.remove("shake");
  togglePlayIcon();
  currentSeconds = totalSeconds;
  timerEl.innerText = formatTime(totalSeconds);
  root.style.setProperty("--degrees", "0deg");
}

// Trigger animation when timer reaches 0
function triggerAnimation() {
  timerEl.classList.add("shake");
  setTimeout(() => timerEl.classList.remove("shake"), 2000);
}
