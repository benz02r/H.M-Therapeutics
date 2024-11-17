// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Contact Form Submission (if on Contact Us page)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent the default form submission

        // Form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('form-message');

        // Validate each field
        if (!name || !email || !phone || !message) {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        if (!phonePattern.test(phone)) {
            formMessage.textContent = "Please enter a valid 11-digit phone number.";
            formMessage.style.color = "red";
            return;
        }

        // Prepare Form Data for Formspree
        const formData = new FormData(contactForm);

        try {
            // Send data to Formspree
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                formMessage.textContent = "Thank you for your message! We will get back to you soon.";
                formMessage.style.color = "green";
                contactForm.reset(); // Clear the form fields
            } else {
                formMessage.textContent = "Oops! There was a problem submitting your form.";
                formMessage.style.color = "red";
            }
        } catch (error) {
            formMessage.textContent = "Oops! There was a problem submitting your form.";
            formMessage.style.color = "red";
        }
    });
}
