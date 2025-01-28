let currentUnit = "kg";

function toggleUnit() {
  const unit = document.getElementById("unit").value;
  const weightInput = document.getElementById("weight");
  const slider = document.getElementById("weight-slider");

  if (unit === "kg" && currentUnit === "lbs") {
    weightInput.value = (weightInput.value / 2.20462).toFixed(2);
    slider.value = (slider.value / 2.20462).toFixed(2);
  } else if (unit === "lbs" && currentUnit === "kg") {
    weightInput.value = (weightInput.value * 2.20462).toFixed(2);
    slider.value = (slider.value * 2.20462).toFixed(2);
  }

  currentUnit = unit;
}

function updateWeightFromSlider() {
  const slider = document.getElementById("weight-slider");
  document.getElementById("weight").value = slider.value;
}

function displayPlanetInfo() {
  const planetSelect = document.getElementById("planet");
  const planetInfo = document.getElementById("planet-info");
  const selectedOption = planetSelect.options[planetSelect.selectedIndex];

  planetInfo.textContent = selectedOption.getAttribute("data-info") || "";
}

function calculateWeight() {
  const weightInput = document.getElementById("weight").value;
  const planetSelect = document.getElementById("planet");
  const planetGravity = parseFloat(planetSelect.value);

  if (!weightInput || planetGravity === 0) {
    alert("Please enter a weight and select a planet.");
    return;
  }

  const weight = parseFloat(weightInput);
  const result = currentUnit === "kg" 
    ? (weight * planetGravity).toFixed(2)
    : (weight * planetGravity / 2.20462).toFixed(2);

  const resultText = currentUnit === "kg" 
    ? `${result} kg`
    : `${result} lbs`;

  document.getElementById("result").textContent = `Your weight on ${planetSelect.options[planetSelect.selectedIndex].text} would be: ${resultText}`;
}
