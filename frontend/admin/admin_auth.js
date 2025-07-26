// Tab switching
function switchTab(tabId) {
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");

  if (tabId === "login") {
    document.querySelectorAll(".tab")[0].classList.add("active");
  } else {
    document.querySelectorAll(".tab")[1].classList.add("active");
  }
}

// Simulate stored admin credentials
let adminUsers = JSON.parse(localStorage.getItem("adminUsers")) || [];

// Register new admin
function registerAdmin() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  if (!username || !password) {
    document.getElementById("registerMsg").textContent = "Please fill all fields.";
    return;
  }

  const exists = adminUsers.find(user => user.username === username);
  if (exists) {
    document.getElementById("registerMsg").textContent = "Username already exists.";
    return;
  }

  adminUsers.push({ username, password });
  localStorage.setItem("adminUsers", JSON.stringify(adminUsers));
  document.getElementById("registerMsg").textContent = "Registered successfully. You can now log in.";
  document.getElementById("regUser").value = '';
  document.getElementById("regPass").value = '';
}

// Login admin
function loginAdmin() {
  const username = document.getElementById("loginUser").value;
  const password = document.getElementById("loginPass").value;

  const user = adminUsers.find(u => u.username === username && u.password === password);

  if (user) {
    document.getElementById("loginMsg").textContent = "Login successful! Redirecting...";
    setTimeout(() => {
      window.location.href = "admin_dashboard.html"; // Redirect to admin dashboard
    }, 1000);
  } else {
    document.getElementById("loginMsg").textContent = "Invalid credentials.";
  }
}
