
function startTimer(id) {
  const now = new Date();
  const midnight = new Date();
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById(id).innerText = `${hours}h ${minutes}m ${seconds}s left`;
  setTimeout(() => startTimer(id), 1000);
}

startTimer("timer1");
startTimer("timer2");
