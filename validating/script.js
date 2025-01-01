// Signup Logic
document.getElementById('signupForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get input values
    const name = document.getElementById('signupName').value.trim();
    const password = document.getElementById('signupPassword').value.trim();
  
    if (name && password) {
      // Save to localStorage
      localStorage.setItem('userSignupData', JSON.stringify({ name, password }));
      
      // Show success message
      document.getElementById('signupMessage').style.display = 'block';
    }
  });
  
  // Login Logic
  document.getElementById('loginForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get input values
    const loginName = document.getElementById('loginName').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();
  
    // Retrieve stored data
    const storedData = localStorage.getItem('userSignupData');
    if (!storedData) {
      alert('No signup data found. Please sign up first.');
      return;
    }
  
    const { name, password } = JSON.parse(storedData);
  
    // Validate credentials
    if (loginName === name && loginPassword === password) {
      alert('Login successful!');
      window.location.href = 'main.html';
    } else {
      document.getElementById('loginMessage').style.display = 'block';
    }
  });
  