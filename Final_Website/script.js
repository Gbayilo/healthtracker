// Existing health tracking script...

// Modal functionality
const modal = document.getElementById('bmi-modal');
const openModalButton = document.getElementById('open-bmi-modal');
const closeModalButton = document.querySelector('.close-button');

openModalButton.onclick = function() {
    modal.style.display = 'block';
}

closeModalButton.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function logHealthData() {
    const waterIntake = document.getElementById('water-intake').value;
    const activityLevel = document.getElementById('activity-level').value;
    
    if (waterIntake && activityLevel) {
        const logList = document.getElementById('log-list');
        const listItem = document.createElement('li');
        listItem.textContent = `Water Intake: ${waterIntake} liters, Activity Level: ${activityLevel} minutes`;
        logList.appendChild(listItem);

        // Clear the input fields
        document.getElementById('water-intake').value = '';
        document.getElementById('activity-level').value = '';
    } else {
        alert('Please enter values for both fields.');
    }
}
