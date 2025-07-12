function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <div class="left">
      <input type="checkbox" onclick="toggleDone(this)">
      <span class="task-text">${taskText}</span>
    </div>
    <button onclick="deleteTask(this)">Delete</button>
  `;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function toggleDone(checkbox) {
  const text = checkbox.nextElementSibling;
  text.classList.toggle("completed");
}

function deleteTask(button) {
  const li = button.parentElement;
  li.classList.add("fade-out");
  setTimeout(() => li.remove(), 400); // wait for fade animation
}

// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");
  document.getElementById("themeToggle").textContent = isDark ? "☀" : "🌙";
});