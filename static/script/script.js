const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-theme");
  themeIcon.textContent = "🌙"; // show moon if light theme
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");

  themeIcon.textContent = isLight ? "🌙" : "☀️"; // 🌙 for light, ☀️ for dark
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
