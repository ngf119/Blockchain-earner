// Countdown Timer (existing code)
const launchDate = new Date(2024, 1, 1, 12, 0, 0);

function updateCountdown() {
  const now = new Date();
  const timeLeft = launchDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (timeLeft < 0) {
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerText = "We're Live!";
  }
}

const countdownInterval = setInterval(updateCountdown, 1000);

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
