// Example demo data (replace with Supabase queries later)
const reportData = {
  status: ["Pending", "In Progress", "Resolved", "Rejected"],
  values: [15, 22, 40, 6],
};

const municipalityData = {
  labels: ["Johannesburg", "Durban", "Cape Town", "Pretoria", "Gqeberha"],
  values: [35, 20, 18, 25, 15],
};

const userProvinceData = {
  labels: ["Gauteng", "KZN", "Western Cape", "Limpopo", "Free State"],
  values: [50, 30, 25, 18, 12],
};

const volunteerCategoryData = {
  labels: ["Environment", "Community", "Education", "Health", "Arts"],
  values: [45, 28, 20, 12, 7],
};

// Chart.js options
const baseOptions = {
  responsive: true,
  plugins: {
    legend: { display: true, position: "bottom" },
  },
};

// REPORT STATUS (Doughnut)
new Chart(document.getElementById("reportStatusChart"), {
  type: "doughnut",
  data: {
    labels: reportData.status,
    datasets: [
      {
        data: reportData.values,
        backgroundColor: ["#E6B800", "#277BDE", "#28A745", "#E63946"],
      },
    ],
  },
  options: baseOptions,
});

// MUNICIPALITY (Bar)
new Chart(document.getElementById("reportMunicipalityChart"), {
  type: "bar",
  data: {
    labels: municipalityData.labels,
    datasets: [
      {
        label: "Reports",
        data: municipalityData.values,
        backgroundColor: "#277BDE",
      },
    ],
  },
  options: {
    ...baseOptions,
    scales: {
      y: { beginAtZero: true },
    },
  },
});

// USER PROVINCES (Pie)
new Chart(document.getElementById("userProvinceChart"), {
  type: "pie",
  data: {
    labels: userProvinceData.labels,
    datasets: [
      {
        data: userProvinceData.values,
        backgroundColor: [
          "#277BDE",
          "#E6B800",
          "#28A745",
          "#E63946",
          "#9B59B6",
        ],
      },
    ],
  },
  options: baseOptions,
});

// VOLUNTEERING (Line Chart)
new Chart(document.getElementById("volunteerCategoryChart"), {
  type: "line",
  data: {
    labels: volunteerCategoryData.labels,
    datasets: [
      {
        label: "Volunteers per Category",
        data: volunteerCategoryData.values,
        borderColor: "#277BDE",
        backgroundColor: "rgba(39, 123, 222, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  },
  options: baseOptions,
});
