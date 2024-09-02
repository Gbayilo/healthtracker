document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('health-form');
    const healthDataDiv = document.getElementById('health-data');

    // Load existing data from local storage
    const loadHealthData = () => {
        const storedData = JSON.parse(localStorage.getItem('healthData'));
        if (storedData) {
            displayHealthData(storedData);
        }
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        // Capture the input values
        const waterIntake = document.getElementById('water-intake').value;
        const exerciseDuration = document.getElementById('exercise-duration').value;
        const sleepHours = document.getElementById('sleep-hours').value;

        // Create an object to store the data
        const healthData = {
            waterIntake: waterIntake,
            exerciseDuration: exerciseDuration,
            sleepHours: sleepHours
        };

        // Save the data to local storage
        localStorage.setItem('healthData', JSON.stringify(healthData));

        // Display the data
        displayHealthData(healthData);
        
        // Clear the form after submission
        form.reset();

        // Show confirmation message
        showConfirmationMessage();
    });

    function displayHealthData(data) {
        // Clear any previous data
        healthDataDiv.innerHTML = '';

        // Create HTML elements to display the data
        const waterP = document.createElement('p');
        waterP.textContent = `Water Intake: ${data.waterIntake} liters`;

        const exerciseP = document.createElement('p');
        exerciseP.textContent = `Exercise Duration: ${data.exerciseDuration} minutes`;

        const sleepP = document.createElement('p');
        sleepP.textContent = `Sleep Hours: ${data.sleepHours} hours`;

        // Append the data to the display section
        healthDataDiv.appendChild(waterP);
        healthDataDiv.appendChild(exerciseP);
        healthDataDiv.appendChild(sleepP);
    }


    function showConfirmationMessage() {
        // Create a confirmation message
        const confirmationMsg = document.createElement('p');
        confirmationMsg.textContent = 'Data saved successfully!';
        confirmationMsg.style.color = 'green';
        confirmationMsg.style.fontWeight = 'bold';

        // Append the message to the display section
        healthDataDiv.appendChild(confirmationMsg);

        // Remove the message after 3 seconds
        setTimeout(() => {
            confirmationMsg.remove();
        }, 3000);
    }

    // Load health data when the page loads
    loadHealthData();
});
