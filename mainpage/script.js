function validateForm(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    var uppercaseRegex = /[A-Z]/;
    var numberRegex = /[0-9]/;

    if (password.length < 8 || !uppercaseRegex.test(password) || !numberRegex.test(password)) {
        alert("Password must meet the criteria: at least 8 characters, one uppercase letter, and one number.");
    } else {
        alert("Registration successful!\nUsername: " + username + "\nPassword: " + password);
      
    }
}
