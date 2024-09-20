document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("errorMsg");
    const showPasswordCheckbox = document.getElementById("show-password");

    // List of users (acting as a simple database)
    let users = [
        { username: "pino", password: "genteng" }, // Predefined user
        { username: "tes", password: "tes" } // Predefined user
    ];

    // Show/Hide Password Logic
    showPasswordCheckbox.addEventListener("change", function() {
        passwordInput.type = this.checked ? "text" : "password";
    });

    // Form Submission Logic (Login)
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Simple validation
        if (username === "" || password === "") {
            errorMsg.textContent = "Username and Password cannot be empty.";
            errorMsg.classList.add("show"); // Show error message
            return;
        }

        // Check if the user exists
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            alert("Login successful!");
            window.location.href = "coba.html"; // Redirect to the next page
        } else {
            errorMsg.textContent = "Invalid Username or Password.";
            errorMsg.classList.add("show"); // Show error message
        }
    });

    // Function to register a new user
    function registerUser(username, password) {
        // Check if the user already exists
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            errorMsg.textContent = "Username already taken. Please choose another.";
            errorMsg.classList.add("show");
        } else {
            // Add the new user to the users list
            users.push({ username, password });
            alert("Registration successful!");
            errorMsg.textContent = "";
            errorMsg.classList.remove("show");
        }
    }

    // Example usage: Registering a new user
    // Uncomment the following line to test user registration
    // registerUser("newUser", "newPassword123");
});
