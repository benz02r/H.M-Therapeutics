// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');

if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mainNav.classList.toggle('active');
    });
}

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault(); // Prevent default form submission behavior

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('form-message');

        // Validate the form fields
        if (!name || !email || !message) {
            formMessage.textContent = "Please fill out all required fields.";
            formMessage.style.color = "red";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid email address.";
            formMessage.style.color = "red";
            return;
        }

        // Optional phone validation (if phone input is not empty)
        if (phone && phone.length < 5) {
            formMessage.textContent = "Please enter a valid phone number.";
            formMessage.style.color = "red";
            return;
        }

        try {
            // Send form data to Formspree
            const formData = new FormData(contactForm);
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


// Modal Toggle
function toggleModal(serviceId) {
    document.getElementById(`${serviceId}-modal`).classList.toggle("active");
}

// Scroll Animation Observer
document.addEventListener("DOMContentLoaded", () => {
    const serviceItems = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.3 });

    serviceItems.forEach(item => observer.observe(item));
});
