document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const ADMIN_USER = "admin";
    const ADMIN_PASS = "admin123";

    if (username === "" || password === "") {
      showAlert("⚠️ Please fill in both fields");
      return;
    }

    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem("loggedIn", "true");

      showAlert("✅ Login successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "home.html"; 
      }, 800);
    } else {
      showAlert("❌ Invalid username or password");
    }
  });
});

function showAlert(message) {
  const oldAlert = document.querySelector(".alert-box");
  if (oldAlert) oldAlert.remove();

  const alert = document.createElement("div");
  alert.className = "alert-box";
  alert.textContent = message;
  document.body.appendChild(alert);

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

  setTimeout(() => alert.remove(), 2500);
}
