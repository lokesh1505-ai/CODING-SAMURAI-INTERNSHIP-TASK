// Dark mode toggle
const toggleBtn = document.getElementById("darkModeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Update button text
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.textContent = "☀ Light Mode";
  } else {
    toggleBtn.textContent = "🌙 Dark Mode";
  }
});