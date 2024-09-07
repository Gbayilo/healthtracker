document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tracking-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const weight = parseFloat(document.getElementById('weight').value);
        const height = parseFloat(document.getElementById('height').value);
        const steps = parseInt(document.getElementById('steps').value);
        const water = parseFloat(document.getElementById('water').value);
        const sleep = parseFloat(document.getElementById('sleep').value);
        const heartRate = parseInt(document.getElementById('heart-rate').value);
        
        // Calculate BMI
        const heightInMeters = height / 100;
        const bmi = weight / (heightInMeters * heightInMeters);
        let bmiStatus = '';
        let bmiAdvice = '';
        
        if (bmi < 18.5) {
            bmiStatus = 'Underweight';
            bmiAdvice = 'You should aim to gain weight through a balanced diet and regular exercise.';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            bmiStatus = 'Normal weight';
            bmiAdvice = 'Keep up the good work with a balanced diet and regular physical activity.';
        } else if (bmi >= 25 && bmi < 29.9) {
            bmiStatus = 'Overweight';
            bmiAdvice = 'Consider adjusting your diet and increasing your physical activity to achieve a healthier weight.';
        } else {
            bmiStatus = 'Obese';
            bmiAdvice = 'Consult with a healthcare provider for personalized advice on managing your weight.';
        }
        
        // Additional advice
        let stepsAdvice = '';
        let waterAdvice = '';
        let sleepAdvice = '';
        let heartRateAdvice = '';

        // Steps Advice
        if (steps < 5000) {
            stepsAdvice = 'Try to increase your daily step count to at least 10,000 steps for better health.';
        } else if (steps >= 5000 && steps < 10000) {
            stepsAdvice = 'Good job! Aim to maintain or slightly increase your daily steps for continued health benefits.';
        } else {
            stepsAdvice = 'Excellent! Keep up the great work with your physical activity.';
        }
        
        // Water Intake Advice
        if (water < 2) {
            waterAdvice = 'Increase your water intake to at least 2 liters per day to stay hydrated.';
        } else if (water >= 2 && water < 3) {
            waterAdvice = 'Good hydration! Aim to maintain your current water intake for optimal health.';
        } else {
            waterAdvice = 'Great job staying hydrated! Continue drinking plenty of water each day.';
        }
        
        // Sleep Duration Advice
        if (sleep < 7) {
            sleepAdvice = 'Try to get at least 7-9 hours of sleep per night for better health and recovery.';
        } else if (sleep >= 7 && sleep < 9) {
            sleepAdvice = 'Good sleep duration! Maintain this to support overall well-being.';
        } else {
            sleepAdvice = 'Excellent! You’re getting plenty of rest, which is crucial for health and wellness.';
        }
        
        // Heart Rate Advice
        if (heartRate < 60) {
            heartRateAdvice = 'Your heart rate is lower than average. Ensure you’re getting enough exercise and consult a healthcare provider if you have concerns.';
        } else if (heartRate >= 60 && heartRate <= 100) {
            heartRateAdvice = 'Your heart rate is within the normal range. Keep up the good work with your physical activity and stress management.';
        } else {
            heartRateAdvice = 'Consider monitoring your heart rate and consult a healthcare provider if it remains elevated for further advice.';
        }
        
        // Update tracking summary
        document.getElementById('bmi-result').innerHTML = `
            <h4>BMI Result</h4>
            <p><strong>Weight:</strong> ${weight} kg</p>
            <p><strong>Height:</strong> ${height} cm</p>
            <p><strong>Your BMI:</strong> ${bmi.toFixed(2)}</p>
            <p><strong>Status:</strong> ${bmiStatus}</p>
            <p><strong>Advice:</strong> ${bmiAdvice}</p>
        `;
        
        document.getElementById('activity-summary').innerHTML = `
            <h4>Physical Activity</h4>
            <p><strong>Steps Taken:</strong> ${steps}</p>
            <p><strong>Advice:</strong> ${stepsAdvice}</p>
        `;
        
        document.getElementById('hydration-summary').innerHTML = `
            <h4>Hydration</h4>
            <p><strong>Water Intake:</strong> ${water} L</p>
            <p><strong>Advice:</strong> ${waterAdvice}</p>
        `;
        
        document.getElementById('sleep-summary').innerHTML = `
            <h4>Sleep</h4>
            <p><strong>Sleep Duration:</strong> ${sleep} hours</p>
            <p><strong>Advice:</strong> ${sleepAdvice}</p>
        `;
        
        document.getElementById('heart-rate-summary').innerHTML = `
            <h4>Heart Rate</h4>
            <p><strong>Heart Rate:</strong> ${heartRate} bpm</p>
            <p><strong>Advice:</strong> ${heartRateAdvice}</p>
        `;
    });
});
