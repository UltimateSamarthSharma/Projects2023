// signup.js

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const userData = {
    name: formData.get('name'),
    username: formData.get('username'),
    bio: formData.get('bio'),
    email: formData.get('email'),
    password: formData.get('password'),
  };

  try {
    const response = await fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      window.location.href = 'login.html';
    } else {
      const data = await response.json();
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
