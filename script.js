function showError() {
  document.getElementById("errorPopup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("errorPopup").classList.add("hidden");
}

function yesClick() {

  // 🎵 Play sound
  const sound = document.getElementById("celebrationSound");
  sound.play();

  // 🎉 Confetti burst
  confetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });

  // Extra confetti waves
  setTimeout(() => confetti({ particleCount: 80, spread: 100 }), 400);
  setTimeout(() => confetti({ particleCount: 80, spread: 120 }), 800);

  // 💖 Show final screen after small delay
  setTimeout(() => {

    document.body.innerHTML = `
      <div class="card">
        <h1>YAY ❤️</h1>
        <p>
          You just made me incredibly happy 🥰<br>
          I can't wait to make more memories with you.
        </p>
        <img src="image/PXL_20241019_100958843.jpg">
        <h2>It's a date 😍</h2>
      </div>
    `;

  }, 1200);
}

