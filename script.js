// Function to generate a random captcha
function generateCaptcha() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; // Characters to choose from
    var captcha = ""; // Initialize captcha string
    // Loop to generate a 6-character captcha
    for (var i = 0; i < 6; i++) {
        var randomIndex = parseInt(Math.random() * chars.length); // Generate a random index
        captcha += chars.charAt(randomIndex); // Append the character at the random index to the captcha string
    }
    document.getElementById('captchaCode').value = captcha; // Set the generated captcha to the captcha input field
}

// Variables to temporarily store registration data
let temp_Register_Name = '';
let temp_Register_Email = '';
let temp_Register_Password = '';

// Function to validate the registration form
function validateRegistration() {
    // Retrieve input values from the form
    var captchaCode = document.getElementById('captchaCode').value; // Captcha code displayed
    var captchaInput = document.getElementById('captchaInput').value; // Captcha entered by the user
    temp_Register_Name = document.getElementById('registerName').value; // Name entered by the user
    temp_Register_Email = document.getElementById('registerEmail').value; // Email entered by the user
    temp_Register_Password = document.getElementById('registerPassword').value; // Password entered by the user

    var resultRegister = document.getElementById('result-1'); // Result div where messages will be displayed
    resultRegister.innerHTML = ""; // Clear previous results

    // Check if all required fields are filled in
    if (!temp_Register_Name || !temp_Register_Email || !temp_Register_Password || !captchaInput) {
        resultRegister.innerHTML = "<p class='text-danger'>Please Fill In All Fields.</p>"; // Show error message
        return;
    }

    // Validate email format using regex
    var emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailRegex.test(temp_Register_Email)) {
        resultRegister.innerHTML = "<p class='text-danger'>Please Enter a Valid Email Address, e.g., example@domain.com.</p>"; // Show error message
        return;
    }

    // Check if the entered captcha matches the generated captcha
    if (captchaCode === captchaInput) {
        resultRegister.innerHTML = "<p class='text-success'>Registration Successfully !</p>"; // Show success message
    } 
    else {
        resultRegister.innerHTML = "<p class='text-danger'>Captcha Did Not Match. Please Try Again.</p>"; // Show error message
    }
}

// Function to validate the login form
function validateLogin() {
    // Retrieve input values from the login form
    var Login_Email = document.getElementById('loginEmail').value;
    var Login_Password = document.getElementById('loginPassword').value;

    var resultLogin = document.getElementById('result-2'); // Result div where messages will be displayed
    resultLogin.innerHTML = ""; // Clear previous results

    if (!temp_Register_Email || !temp_Register_Password) {
        resultLogin.innerHTML =  "<p class='text-danger'>User Doesn't Exist, Please Register...</p>";; 
        return;
    }

    if(!Login_Email || !Login_Password){
        resultLogin.innerHTML = "<p class='text-danger'>Please Fill In All Fields.</p>"; 
        return;
    }
    
    // Check if entered email and password match the registration details
    if (temp_Register_Email !== Login_Email || temp_Register_Password !== Login_Password) {
        resultLogin.innerHTML = "<p class='text-danger'>Invalid Email or Password. Please Try Again!</p>"; // Show error message
    }
    else {
        resultLogin.innerHTML = "<p class='text-success'>Login Successfully !</p>"; // Show success message
    }
}

// Call generateCaptcha function to initially display a captcha when the page loads
generateCaptcha();
