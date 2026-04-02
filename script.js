// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    // Here you can add code to handle the form data, like sending it to a server
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');
    document.getElementById('contact-form').reset();
});
