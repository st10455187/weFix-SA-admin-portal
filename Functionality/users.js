// ===============================
// SUPABASE CONFIG
// ===============================
const SUPABASE_URL = "https://fxjqggmgqxmngjmqjghy.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4anFnZ21ncXhtbmdqbXFqZ2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MTk3NDEsImV4cCI6MjA3ODA5NTc0MX0.iVHA0a_9D5VQjD_ZYmh8AcriqzY18_y7QGqzCat9GiI";
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ===============================
// DOM ELEMENTS
// ===============================
const tableBody = document.getElementById("userList");
const searchInput = document.getElementById("searchInput");
const filterCity = document.getElementById("filterCity");
const filterMunicipality = document.getElementById("filterMunicipality");
const filterStatus = document.getElementById("filterStatus");
const refreshBtn = document.getElementById("refreshBtn");

const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const closeModal = document.getElementById("closeModal");

const editUserForm = document.getElementById("editUserForm");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const userCity = document.getElementById("userCity");
const userMunicipality = document.getElementById("userMunicipality");
const userStatus = document.getElementById("userStatus");

const successOverlay = document.getElementById("successOverlay");
const closeSuccessBtn = document.getElementById("closeSuccessBtn");

let allUsers = [];
let selectedUser = null;

// ===============================
// FETCH USERS FROM SUPABASE
// ===============================
async function fetchUsers() {
  tableBody.innerHTML =
    '<tr><td colspan="6" class="loading">Fetching users...</td></tr>';

  const { data, error } = await supabase
    .from("citizens")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("❌ Fetch Error:", error.message);
    tableBody.innerHTML =
      '<tr><td colspan="6" class="loading">Error loading users.</td></tr>';
    return;
  }

  allUsers = data;
  renderUsers(data);
}

// ===============================
// RENDER USERS
// ===============================
function renderUsers(users) {
  if (!users.length) {
    tableBody.innerHTML =
      '<tr><td colspan="6" class="loading">No users found.</td></tr>';
    return;
  }

  tableBody.innerHTML = "";
  users.forEach((u) => {
    const tr = document.createElement("tr");
    const statusClass =
      u.status === "Active" ? "status-active" : "status-inactive";

    tr.innerHTML = `
      <td>${u.full_name || "N/A"}</td>
      <td>${u.email || "N/A"}</td>
      <td>${u.phone || "N/A"}</td>
      <td>${u.city || "N/A"}</td>
      <td>${u.municipality || "N/A"}</td>
      <td class="${statusClass}">${u.status || "Active"}</td>
    `;

    tr.addEventListener("click", () => showModal(u));
    tableBody.appendChild(tr);
  });
}

// ===============================
// FILTERING + SEARCH
// ===============================
function applyFilters() {
  const searchValue = searchInput.value.toLowerCase();
  const cityValue = filterCity.value;
  const muniValue = filterMunicipality.value;
  const statusValue = filterStatus.value;

  const filtered = allUsers.filter((u) => {
    const matchesSearch =
      u.full_name.toLowerCase().includes(searchValue) ||
      u.email.toLowerCase().includes(searchValue) ||
      (u.phone && u.phone.toLowerCase().includes(searchValue));

    const matchesCity = cityValue === "All" || u.city === cityValue;
    const matchesMunicipality =
      muniValue === "All" || u.municipality === muniValue;
    const matchesStatus = statusValue === "All" || u.status === statusValue;

    return matchesSearch && matchesCity && matchesMunicipality && matchesStatus;
  });

  renderUsers(filtered);
}

searchInput.addEventListener("input", applyFilters);
filterCity.addEventListener("change", applyFilters);
filterMunicipality.addEventListener("change", applyFilters);
filterStatus.addEventListener("change", applyFilters);
refreshBtn.addEventListener("click", fetchUsers);

// ===============================
// SHOW MODAL (EDIT USER)
// ===============================
function showModal(user) {
  selectedUser = user;
  modalTitle.textContent = `Edit: ${user.full_name}`;
  userName.value = user.full_name;
  userEmail.value = user.email;
  userPhone.value = user.phone || "";
  userCity.value = user.city || "";
  userMunicipality.value = user.municipality || "";
  userStatus.value = user.status || "Active";

  modalOverlay.classList.add("visible");
}

// ===============================
// SAVE CHANGES
// ===============================
editUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!selectedUser) return;

  const updatedUser = {
    full_name: userName.value.trim(),
    email: userEmail.value.trim(),
    phone: userPhone.value.trim(),
    city: userCity.value.trim(),
    municipality: userMunicipality.value.trim(),
    status: userStatus.value,
  };

  const { data, error } = await supabase
    .from("citizens")
    .update(updatedUser)
    .eq("id", selectedUser.id)
    .select();

  if (error) {
    console.error("❌ Update Error:", error.message);
    alert("Error updating user: " + error.message);
    return;
  }

  successOverlay.classList.add("visible");
  modalOverlay.classList.remove("visible");
  fetchUsers();
});

// ===============================
// CLOSE MODALS
// ===============================
closeModal.addEventListener("click", () =>
  modalOverlay.classList.remove("visible")
);
closeSuccessBtn.addEventListener("click", () =>
  successOverlay.classList.remove("visible")
);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("visible");
});

// ===============================
// INITIAL LOAD
// ===============================
fetchUsers();
