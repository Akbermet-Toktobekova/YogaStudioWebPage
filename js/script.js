document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    // Check if all fields are filled
    if (!name || !email || !message || !contactMethod) {
        alert("Please fill in all the fields and select a contact method.");
        return;
    }

    // Check if the email format is valid
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If all fields are valid, display a success message
    alert(`Thank you for reaching out, ${name}! We'll get back to you soon.`);
});

function toggleAccessibility() {
    document.body.classList.toggle('accessibility');
}
