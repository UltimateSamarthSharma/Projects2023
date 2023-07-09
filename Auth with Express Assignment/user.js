// user.js

window.addEventListener('DOMContentLoaded', async () => {
    try {
      const response = await fetch('/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const userData = await response.json();
        displayUserData(userData);
      } else {
        const data = await response.json();
        console.error('Error:', data.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  
  function displayUserData(userData) {
    const nameElement = document.getElementById('name');
    const usernameElement = document.getElementById('username');
    const bioElement = document.getElementById('bio');
    const emailElement = document.getElementById('email');
  
    nameElement.textContent = `Name: ${userData.name}`;
    usernameElement.textContent = `Username: ${userData.username}`;
    bioElement.textContent = `Bio: ${userData.bio}`;
    emailElement.textContent = `Email: ${userData.email}`;
  }
  