document.addEventListener('DOMContentLoaded', () => {
    const usernamePlaceholder = document.getElementById('username-placeholder');
    
    // Retrieve the user data from localStorage
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.username) {
        // Display the username on the dashboard
        usernamePlaceholder.textContent = user.username;
    } else {
        // If no user is found, redirect to login
        window.location.href = 'login.html';
    }

    // Handle button clicks
    document.getElementById('create-journal-btn').addEventListener('click', () => {
        window.location.href = 'journal.html'; // Example page for journal entries
    });

    document.getElementById('view-goals-btn').addEventListener('click', () => {
        window.location.href = 'goals.html'; // Example page for goals
    });

    document.getElementById('view-blog-btn').addEventListener('click', () => {
        window.location.href = 'blog.html'; // Example page for blog
    });
});
