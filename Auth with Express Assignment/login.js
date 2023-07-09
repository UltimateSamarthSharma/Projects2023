// login.js

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const userData = {
    username: formData.get('username'),
    password: formData.get('password'),
  };

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      window.location.href = 'user.html';
    } else {
      const data = await response.json();
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
