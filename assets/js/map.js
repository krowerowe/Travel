document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("world-map");
  if (map) {
    map.innerHTML = `
      <svg width="300" height="150" viewBox="0 0 800 400">
        <rect width="800" height="400" fill="#e0e0e0"/>
        <a xlink:href="countries/greece.html">
          <circle cx="550" cy="200" r="10" fill="blue">
            <title>Greece</title>
          </circle>
        </a>
        <a xlink:href="countries/italy.html">
          <circle cx="500" cy="190" r="10" fill="green">
            <title>Italy</title>
          </circle>
        </a>
        <a xlink:href="countries/france.html">
          <circle cx="450" cy="180" r="10" fill="red">
            <title>France</title>
          </circle>
        </a>
      </svg>
    `;
  }
});
