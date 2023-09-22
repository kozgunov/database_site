document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign Up Form Submitted');
});

document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Sign In Form Submitted');
});



function togglePasswordVisibility(passwordFieldId, iconElement) {
    const passwordField = document.getElementById(passwordFieldId);
    if (passwordField.type === "password") {
        passwordField.type = "text";
        iconElement.src = "eye-slash-icon.png"; // Path to the 'eye-slash' icon
    } else {
        passwordField.type = "password";
        iconElement.src = "eye-icon.png"; // Path to the 'eye' icon
    }
}

function openAssistant() {
    // Implement the functionality you want when the assistant is clicked.
    // For example, open a chat/help modal or navigate to a help page.
    alert('Assistant Clicked!');
}

/* google_login
function onSignIn(googleUser) {
    // Get the user's ID token and basic profile information
    var id_token = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();

    // TODO: Send the ID token to your server for verification and user authentication
    console.log('ID Token: ' + id_token);
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
}
*/
