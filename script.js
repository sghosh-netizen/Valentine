function showError() {
  document.getElementById("errorPopup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("errorPopup").classList.add("hidden");
}

function yesClick() {
  document.body.innerHTML = `
    <div class="card">
      <h1>YAY ❤️</h1>
      <p>
        You just made me incredibly happy 🥰<br>
        I can't wait to make more memories with you.
      </p>
      <img src="image/PXL_20241019_100958843.RAW-01.COVER.jpg" alt="us together">
      <h2>It's a date 😍</h2>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const heartsContainer = document.querySelector(".hearts");

  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";

    const size = 15 + Math.random() * 20;
    heart.style.width = size + "px";
    heart.style.height = size + "px";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 5 + Math.random() * 5 + "s";
    heart.style.opacity = Math.random();

    heartsContainer.appendChild(heart);
  }
});
