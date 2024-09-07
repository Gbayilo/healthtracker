document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Display confirmation message
        form.reset(); // Clear form inputs
        confirmationMessage.classList.remove('hidden');
    });
});
