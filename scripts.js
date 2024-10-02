document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent actual form submission for demo

        // Here you would normally handle form submission, like sending the form data to a server

        // Display success message
        successMessage.style.display = 'block';

        // Clear form inputs
        form.reset();
    });
});
