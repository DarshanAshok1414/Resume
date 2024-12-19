const contactForm = document.getElementById('contactForm');
const formResponse = document.getElementById('formResponse');

contactForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  const formData = new FormData(contactForm);

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      formResponse.style.display = 'block';
      formResponse.textContent = 'Thank you! Your message has been sent successfully.';
      formResponse.style.color = 'green';
      contactForm.reset(); // Clear form fields after successful submission
    } else {
      throw new Error('Form submission failed. Please try again later.');
    }
  } catch (error) {
    formResponse.style.display = 'block';
    formResponse.textContent = 'Oops! Something went wrong. Please try again.';
    formResponse.style.color = 'red';
    console.error('Form submission error:', error); // Log error for debugging
  }
});
