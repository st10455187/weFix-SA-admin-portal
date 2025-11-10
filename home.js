document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
});
if (localStorage.getItem("loggedIn") !== "true") {
  window.location.href = "login.html";
}

const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalAction = document.getElementById("modalAction");
const closeModal = document.getElementById("closeModal");

const activeFeatures = {
  "View Reports": {
    desc: "Access all reports submitted by users. Filter, approve, or mark issues as resolved.",
    link: "reports.html",
  },
  "Manage Users": {
    desc: "View registered users, assign roles, deactivate accounts, and monitor activity.",
    link: "users.html",
  },
  "Volunteering Opportunities": {
    desc: "View available volunteering projects and assign volunteers to specific tasks.",
    link: "volunteering.html",
  },
  Statistics: {
    desc: "Analyze performance, report counts, and trends for improved municipal service delivery.",
    link: "statistics.html",
  },
  "Scheduled Outage": {
    desc: "View all scheduled outages and maintenance dates.",
    link: "utility.html",
  },
  "Garbage Collection Dates": {
    desc: "View all the scheduled dates for garbage collection.",
    link: "garbage.html",
  },
};

document.querySelectorAll(".active-feature").forEach((card) => {
  card.addEventListener("click", () => {
    const feature = card.getAttribute("data-feature");
    modalTitle.textContent = feature;
    modalDescription.textContent = activeFeatures[feature].desc;
    modalAction.textContent = "Open";
    modalAction.onclick = () =>
      (window.location.href = activeFeatures[feature].link);
    modalAction.style.display = "inline-block";
    modalOverlay.classList.add("visible");
  });
});

document.querySelectorAll(".coming-soon").forEach((card) => {
  card.addEventListener("click", () => {
    const feature = card.getAttribute("data-feature");
    modalTitle.textContent = `${feature} : Coming Soon 🚧`;
    modalDescription.textContent = `The "${feature}" feature is under development. It will soon allow you to manage ${feature.toLowerCase()} directly from your admin portal.`;
    modalAction.style.display = "none";
    modalOverlay.classList.add("visible");
  });
});

closeModal.addEventListener("click", () =>
  modalOverlay.classList.remove("visible")
);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("visible");
});
