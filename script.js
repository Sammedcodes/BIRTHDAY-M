document.getElementById("wishBtn").addEventListener("click", () => {
  const message = document.getElementById("wishMessage");
  message.classList.toggle("hidden");

  if (!message.classList.contains("hidden")) {
    // Create confetti effect
    for (let i = 0; i < 50; i++) {
      let confetti = document.createElement("div");
      confetti.className = "confetti";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
  }
});