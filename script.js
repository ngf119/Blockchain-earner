// Set the countdown to 6 days from today
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 6);

function updateCountdown() {
  const now = new Date();
  const timeLeft = countdownDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = String(days).padStart(2, '0');
  document.getElementById('hours').innerText = String(hours).padStart(2, '0');
  document.getElementById('minutes').innerText = String(minutes).padStart(2, '0');
  document.getElementById('seconds').innerText = String(seconds).padStart(2, '0');

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerHTML = "<p>We're Live! 🎉</p>";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Contract Address Popup
const caButton = document.getElementById('ca-button');
const caPopup = document.getElementById('ca-popup');
const caText = document.getElementById('ca-text');
const copyButton = document.getElementById('copy-ca');

caButton.addEventListener('click', () => {
  caPopup.style.display = 'block';
});

copyButton.addEventListener('click', () => {
  navigator.clipboard.writeText(caText.innerText).then(() => {
    alert('Contract address copied to clipboard!');
  });
});

// Close popup when clicking outside
document.addEventListener('click', (e) => {
  if (!caButton.contains(e.target) && !caPopup.contains(e.target)) {
    caPopup.style.display = 'none';
  }
});

// Airdrop Form Submission
document.getElementById('airdrop-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('airdrop-email').value;
  alert(`Thanks for joining the airdrop, ${email}! Follow us on Twitter to qualify.`);
});

// Staking Button
document.getElementById('learn-staking').addEventListener('click', () => {
  alert("Early staking options will be available to EDU Token holders. Stay tuned!");
});
