const userSlider = document.getElementById("user-slider");
const priceSlider = document.getElementById("price-slider");
const userCount = document.getElementById("user-count");
const priceRangeDisplay = document.getElementById("price-range-display");
const priceDisplay = document.getElementById("price");
const billingToggle = document.getElementById("billing-toggle");

function updatePrice() {
  const users = userSlider.value;
  const maxPriceRange = priceSlider.value;
  const isAnnual = billingToggle.checked;

  // Base price per user
  const monthlyPricePerUser = maxPriceRange; 
  const annualDiscount = 0.8; // 20% discount for annual billing

  let price = users * monthlyPricePerUser;
  if (isAnnual) {
    price *= 12 * annualDiscount; 
  }

  userCount.textContent = `${users} Users`;
  priceRangeDisplay.textContent = `$${parseFloat(maxPriceRange).toFixed(2)}`;
  priceDisplay.textContent = `$${price.toFixed(2)}`;
}

userSlider.addEventListener("input", updatePrice);
priceSlider.addEventListener("input", updatePrice);
billingToggle.addEventListener("change", updatePrice);

updatePrice();
