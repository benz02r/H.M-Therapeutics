document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
});


document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the default form submission

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

  // Simple email and phone validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{10}$/;

  if (!emailPattern.test(email)) {
      formMessage.textContent = "Please enter a valid email address.";
      formMessage.style.color = "red";
      return;
  }

  if (!phonePattern.test(phone)) {
      formMessage.textContent = "Please enter a valid 10-digit phone number.";
      formMessage.style.color = "red";
      return;
  }

  // Display confirmation message
  formMessage.textContent = "Thank you for your message! We will get back to you soon.";
  formMessage.style.color = "green";

  // Optionally, clear the form fields
  document.getElementById('contactForm').reset();
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevents the default form submission

  const formMessage = document.getElementById('form-message');
  
  // Send form data to Formspree
  const formData = new FormData(this);

  fetch(this.action, {
      method: 'POST',
      body: formData,
      headers: {
          'Accept': 'application/json'
      }
  }).then(response => {
      if (response.ok) {
          formMessage.textContent = "Thank you for your message! We will get back to you soon.";
          formMessage.style.color = "green";
          document.getElementById('contactForm').reset(); // Clear form fields
      } else {
          formMessage.textContent = "Oops! There was a problem submitting your form.";
          formMessage.style.color = "red";
      }
  }).catch(error => {
      formMessage.textContent = "Oops! There was a problem submitting your form.";
      formMessage.style.color = "red";
  });
});
