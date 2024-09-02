document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from submitting the traditional way

        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser && storedUser.username === username && storedUser.password === password) {
            window.location.href = 'dashboard.html'; // Redirect to the dashboard
        } else {
            alert('Invalid username or password.');
        }
    });
});
