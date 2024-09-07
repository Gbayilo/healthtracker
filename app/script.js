// Array of tips
const tips = [
    "Drink at least 8 glasses of water a day to stay hydrated.",
    "Aim for 30 minutes of physical activity most days of the week.",
    "Get at least 7-8 hours of sleep each night for better health.",
    "Incorporate more fruits and vegetables into your diet for essential nutrients."
];

// Function to get a random tip
function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
}

// Display a random tip on page load
document.addEventListener("DOMContentLoaded", () => {
    const tipText = document.getElementById("tip-text");
    tipText.textContent = getRandomTip();
});
