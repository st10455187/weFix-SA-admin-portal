// -----------------------------
// LOGIN FUNCTIONALITY SCRIPT
// -----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // Get input values
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    // Hardcoded credentials
    const ADMIN_USER = "admin";
    const ADMIN_PASS = "admin123";

    // Basic validation
    if (username === "" || password === "") {
      showAlert("⚠️ Please fill in both fields");
      return;
    }

    // Check credentials
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // Save session state
      localStorage.setItem("loggedIn", "true");

      // Small delay for feedback
      showAlert("✅ Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "home.html"; // redirect to dashboard
      }, 800);
    } else {
      showAlert("❌ Invalid username or password");
    }
  });
});

// -----------------------------
// HELPER: Inline Alert Popup
// -----------------------------
function showAlert(message) {
  // Remove any existing alert first
  const oldAlert = document.querySelector(".alert-box");
  if (oldAlert) oldAlert.remove();

  // Create alert
  const alert = document.createElement("div");
  alert.className = "alert-box";
  alert.textContent = message;
  document.body.appendChild(alert);

  // Style (minimal inline style for reusability)
  Object.assign(alert.style, {
    position: "fixed",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    background: "#000",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontSize: "14px",
    fontWeight: "500",
    zIndex: "9999",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  });

  // Auto remove after 2.5s
  setTimeout(() => alert.remove(), 2500);
}
