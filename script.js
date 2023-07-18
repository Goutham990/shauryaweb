const themeSelectionBtn = document.getElementById('themeSelectionBtn');
const themeSelectionModal = document.getElementById('themeSelectionModal');
const lightThemeBtn = document.getElementById('lightThemeBtn');
const darkThemeBtn = document.getElementById('darkThemeBtn');
const signupModal = document.getElementById('signupModal');
const closeBtn = document.getElementsByClassName('close')[0];
const signupForm = document.getElementById('signupForm');
const userCounter = document.getElementById('userCounter');
let currentTheme = 'light-theme.css';
const sportsInterests = [];

themeSelectionBtn.addEventListener('click', openThemeSelectionModal);
lightThemeBtn.addEventListener('click', setLightTheme);
darkThemeBtn.addEventListener('click', setDarkTheme);
closeBtn.addEventListener('click', closeSignupModal);
signupForm.addEventListener('submit', handleFormSubmission);

function openThemeSelectionModal() {
  themeSelectionModal.style.display = 'block';
}

function setLightTheme() {
  themeSelectionModal.style.display = 'none';
  themeStylesheet.setAttribute('href', 'light-theme.css');
  currentTheme = 'light-theme.css';
  openSignupModal();
}

function setDarkTheme() {
  themeSelectionModal.style.display = 'none';
  themeStylesheet.setAttribute('href', 'dark-theme.css');
  currentTheme = 'dark-theme.css';
  openSignupModal();
}


function openSignupModal() {
  signupModal.style.display = 'block';
}

function closeSignupModal() {
  signupModal.style.display = 'none';
}

function handleFormSubmission(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const phone = document.getElementById('phone').value;
  const gender = document.getElementById('gender').value;
  const sports = Array.from(document.getElementById('sports').selectedOptions).map(option => option.value);

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);
  console.log('Phone Number:', phone);
  console.log('Gender:', gender);
  console.log('Sports Interests:', sports);

  userCounter.innerText = `Registered Users: ${parseInt(userCounter.innerText.split(':')[1]) + 1}`;

  signupForm.reset(); // it Clear form fields

  closeSignupModal();
}

function handleSportsInterestSelection(event) {
  const selectedOptions = Array.from(event.target.selectedOptions).map(option => option.value);
  sportsInterests.length = 0; // for Reset sports interests array
  sportsInterests.push(...selectedOptions);
}

document.getElementById('sports').addEventListener('change', handleSportsInterestSelection);

// for Checking local storage for theme preference
const storedTheme = localStorage.getItem('theme');
if (storedTheme) {
  themeStylesheet.setAttribute('href', storedTheme);
  currentTheme = storedTheme;
}

// for. Update local storage when theme changes
window.addEventListener('beforeunload', () => {
  localStorage.setItem('theme', currentTheme);
});
