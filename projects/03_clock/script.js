let is24HourFormat = true;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  if (!is24HourFormat) {
    const amPm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert to 12-hour format
    document.getElementById("clock").innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${amPm}`;
  } else {
    document.getElementById("clock").innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }
}

function pad(number) {
  return number.toString().padStart(2, "0");
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  const button = document.getElementById("toggle-format");
  button.innerText = is24HourFormat ? "Switch to 12-hour Format" : "Switch to 24-hour Format";
}

// Update the clock every second
setInterval(updateClock, 1000);

document.getElementById("toggle-format").addEventListener("click", toggleFormat);

// Initial clock display
updateClock();
