document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('register-form');

    registerForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('user', JSON.stringify({ username, password }));
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            alert('Please fill in both fields.');
        }
    });
});
