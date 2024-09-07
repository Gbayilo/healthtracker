document.addEventListener('DOMContentLoaded', function() {
    const tipElement = document.getElementById('tip');
    
    // Array of sample tips
    const tips = [
        "Drink plenty of water throughout the day to stay hydrated.",
        "Engage in at least 30 minutes of exercise daily to maintain good health.",
        "Eat a balanced diet rich in fruits, vegetables, and whole grains.",
        "Get at least 7-8 hours of sleep every night to aid recovery and overall well-being.",
        "Practice mindfulness or meditation to manage stress effectively."
    ];
    
    // Function to get a random tip
    function getRandomTip() {
        const randomIndex = Math.floor(Math.random() * tips.length);
        return tips[randomIndex];
    }
    
    // Display a random tip on page load
    tipElement.textContent = getRandomTip();
});
