document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    // Calculate BMI
    const bmi = weight / (height * height);

    // Get result elements
    const bmiStatus = document.getElementById('bmiStatus');
    const bmiAdvice = document.getElementById('bmiAdvice');

    // Determine BMI category and advice
    let status = '';
    let advice = '';

    if (bmi < 18.5) {
        status = 'Underweight';
        advice = 'Consider a balanced diet and consult with a nutritionist to ensure you are meeting your nutritional needs.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = 'Normal weight';
        advice = 'Great job! Continue maintaining a balanced diet and regular exercise to stay healthy.';
    } else if (bmi >= 25 && bmi < 29.9) {
        status = 'Overweight';
        advice = 'Consider incorporating more physical activity and healthier eating habits into your daily routine.';
    } else {
        status = 'Obese';
        advice = 'Consult with a healthcare provider for personalized advice and support to manage your weight effectively.';
    }

    // Display results
    bmiStatus.textContent = `Your BMI: ${bmi.toFixed(1)} (${status})`;
    bmiAdvice.textContent = advice;
});
