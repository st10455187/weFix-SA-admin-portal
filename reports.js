const SUPABASE_URL = "https://fxjqggmgqxmngjmqjghy.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4anFnZ21ncXhtbmdqbXFqZ2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTk3NDEsImV4cCI6MjA3ODA5NTc0MX0.iVHA0a_9D5VQjD_ZYmh8AcriqzY18_y7QGqzCat9GiI";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const tableBody = document.getElementById("reportList");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");
const statusSelect = document.getElementById("statusSelect");
const adminNote = document.getElementById("adminNote");
const updateStatusBtn = document.getElementById("updateStatusBtn");
const successOverlay = document.getElementById("successOverlay");
const closeSuccessBtn = document.getElementById("closeSuccessBtn");

const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const filterCity = document.getElementById("filterCity");
const filterMunicipality = document.getElementById("filterMunicipality");
const refreshBtn = document.getElementById("refreshBtn");

let reportsData = [];
let selectedReport = null;

async function fetchReports() {
  tableBody.innerHTML =
    '<tr><td colspan="5" class="loading">Fetching reports...</td></tr>';

  const { data, error } = await supabase
    .from("reports")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("❌ Fetch Error:", error.message);
    tableBody.innerHTML =
      '<tr><td colspan="5" class="loading">Error loading reports.</td></tr>';
    return;
  }

  reportsData = data;
  populateFilters(data);
  displayReports(data);
}

function populateFilters(data) {
  const cities = ["All", ...new Set(data.map((r) => r.city).filter(Boolean))];
  const municipalities = [
    "All",
    ...new Set(data.map((r) => r.municipality).filter(Boolean)),
  ];

  filterCity.innerHTML = cities.map((c) => `<option>${c}</option>`).join("");
  filterMunicipality.innerHTML = municipalities
    .map((m) => `<option>${m}</option>`)
    .join("");
}

function displayReports(data) {
  if (!data || data.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="5" class="loading">No reports found.</td></tr>';
    return;
  }

  tableBody.innerHTML = "";
  data.forEach((r) => {
    const tr = document.createElement("tr");

    let statusClass = "status-pending";
    if (r.status === "In Progress") statusClass = "status-inprogress";
    else if (r.status === "Resolved") statusClass = "status-resolved";
    else if (r.status === "Rejected") statusClass = "status-rejected";

    tr.innerHTML = `
      <td>${r.category || "N/A"}</td>
      <td>${r.municipality || "N/A"}</td>
      <td>${r.address ? r.address : "N/A"}${r.city ? ", " + r.city : ""}</td>
      <td class="${statusClass}">${r.status || "Pending"}</td>
      <td>${new Date(r.created_at || r.createdAt).toLocaleDateString()}</td>
    `;
    tr.addEventListener("click", () => showModal(r));
    tableBody.appendChild(tr);
  });
}

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const cat = filterCategory.value;
  const city = filterCity.value;
  const muni = filterMunicipality.value;

  const filtered = reportsData.filter((r) => {
    const matchesSearch =
      r.category?.toLowerCase().includes(search) ||
      r.city?.toLowerCase().includes(search) ||
      r.municipality?.toLowerCase().includes(search) ||
      r.description?.toLowerCase().includes(search);

    const matchesCategory = cat === "All" || r.category === cat;
    const matchesCity = city === "All" || r.city === city;
    const matchesMunicipality = muni === "All" || r.municipality === muni;

    return (
      matchesSearch && matchesCategory && matchesCity && matchesMunicipality
    );
  });

  displayReports(filtered);
}

searchInput.addEventListener("input", applyFilters);
filterCategory.addEventListener("change", applyFilters);
filterCity.addEventListener("change", applyFilters);
filterMunicipality.addEventListener("change", applyFilters);
refreshBtn.addEventListener("click", fetchReports);

function showModal(report) {
  selectedReport = report;

  modalTitle.textContent = report.category || "Report Details";

  modalContent.innerHTML = `
    <p><strong>Street:</strong> ${report.address || "N/A"}</p>
    <p><strong>City:</strong> ${report.city || "N/A"}</p>
    <p><strong>Municipality:</strong> ${report.municipality || "N/A"}</p>
    <p><strong>Status:</strong> ${report.status || "Pending"}</p>
    <p><strong>Postal Code:</strong> ${report.postal_code || "N/A"}</p>
    <hr style="margin:10px 0;" />
    <p><strong>Description:</strong><br>${
      report.description || "No description provided."
    }</p>
  `;

  statusSelect.value = report.status || "Pending";
  adminNote.value = report.admin_note || "";
  modalOverlay.classList.add("visible");
}

updateStatusBtn.addEventListener("click", async (e) => {
  e.preventDefault();
  if (!selectedReport) return;

  const newStatus = statusSelect.value.trim();
  const note = adminNote.value.trim();

  const { data, error } = await supabase
    .from("reports")
    .update({ status: newStatus, admin_note: note })
    .eq("id", selectedReport.id)
    .select();

  if (error) {
    console.error("❌ Update Error:", error);
    alert("Error: " + error.message);
    return;
  }

  modalOverlay.classList.remove("visible");
  successOverlay.classList.add("visible");
  fetchReports();
});

closeModal.addEventListener("click", () =>
  modalOverlay.classList.remove("visible")
);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("visible");
});
closeSuccessBtn.addEventListener("click", () =>
  successOverlay.classList.remove("visible")
);

fetchReports();
