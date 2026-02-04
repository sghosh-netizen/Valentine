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
