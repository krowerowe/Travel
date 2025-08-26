// Highlight visited countries and link to their pages
document.addEventListener("DOMContentLoaded", () => {
  const visitedCountries = {
    GR: "greece.html",
    IT: "italy.html"
    // Add more as needed
  };

  Object.entries(visitedCountries).forEach(([code, url]) => {
    const countryPath = document.querySelector(`#${code}`);
    if (countryPath) {
      countryPath.classList.add("visited");
      countryPath.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });
});
