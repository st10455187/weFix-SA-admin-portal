const opportunities = [
  {
    id: 1,
    title: "Old School Park Cleanup",
    location: "Durban, KZN",
    city: "Durban",
    province: "KwaZulu-Natal",
    distance: 2.5,
    date: "2025-11-15",
    desc: "Join us for a Saturday cleanup to restore our community park and make it safe again.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994",
    category: "Environment",
    contact: {
      name: "Zanele Mkhize",
      phone: "+27 72 445 8865",
      email: "zanele@wefixsa.org",
    },
  },
  {
    id: 2,
    title: "Beach Cleanup",
    location: "Umhlanga, KZN",
    city: "Umhlanga",
    province: "KwaZulu-Natal",
    distance: 5,
    date: "2025-11-23",
    desc: "Help remove litter and plastics along our coastline. Gloves and bags provided.",
    image: "https://images.unsplash.com/photo-1581579188781-d64ac69be77f",
    category: "Environment",
    contact: {
      name: "Thabo Dlamini",
      phone: "+27 61 993 2110",
      email: "thabo@wefixsa.org",
    },
  },
  {
    id: 3,
    title: "Tree Planting Day",
    location: "Soweto, Gauteng",
    city: "Soweto",
    province: "Gauteng",
    distance: 8.1,
    date: "2025-11-30",
    desc: "Plant indigenous trees and learn about urban greening initiatives.",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    category: "Environment",
    contact: {
      name: "Nomsa Khumalo",
      phone: "+27 73 122 9981",
      email: "nomsa@wefixsa.org",
    },
  },
  {
    id: 4,
    title: "Feeding the Homeless",
    location: "Johannesburg CBD, Gauteng",
    city: "Johannesburg",
    province: "Gauteng",
    distance: 1.8,
    date: "2025-12-01",
    desc: "Distribute meals and care packs to the homeless community.",
    image: "https://images.unsplash.com/photo-1573497491208-6b1acb260507",
    category: "Community",
    contact: {
      name: "Sipho Molefe",
      phone: "+27 82 442 1121",
      email: "sipho@wefixsa.org",
    },
  },
  {
    id: 5,
    title: "Youth Coding Workshop",
    location: "Sandton, Gauteng",
    city: "Sandton",
    province: "Gauteng",
    distance: 3.5,
    date: "2025-12-05",
    desc: "Teach basic coding skills to young learners interested in technology.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    category: "Education",
    contact: {
      name: "Angel Maile",
      phone: "+27 71 334 9902",
      email: "angel@wefixsa.org",
    },
  },
  {
    id: 6,
    title: "Senior Citizens Christmas Lunch",
    location: "Pretoria North, Gauteng",
    city: "Pretoria",
    province: "Gauteng",
    distance: 12.3,
    date: "2025-12-10",
    desc: "Serve food, sing, and spend time with elderly citizens for the holidays.",
    image: "https://images.unsplash.com/photo-1559027615-5dc8e1f9b7de",
    category: "Community",
    contact: {
      name: "Lerato Molekwa",
      phone: "+27 65 721 4448",
      email: "lerato@wefixsa.org",
    },
  },
  {
    id: 7,
    title: "Library Book Donation Drive",
    location: "Bloemfontein, Free State",
    city: "Bloemfontein",
    province: "Free State",
    distance: 4.7,
    date: "2025-12-12",
    desc: "Help collect, sort, and distribute books to local schools and libraries.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da",
    category: "Education",
    contact: {
      name: "Karabo Radebe",
      phone: "+27 78 900 4522",
      email: "karabo@wefixsa.org",
    },
  },
  {
    id: 8,
    title: "Animal Shelter Support",
    location: "Pinetown, KZN",
    city: "Pinetown",
    province: "KwaZulu-Natal",
    distance: 6.3,
    date: "2025-12-13",
    desc: "Assist with cleaning, feeding, and walking rescue dogs and cats.",
    image: "https://images.unsplash.com/photo-1507149833265-60c372daea22",
    category: "Animal Welfare",
    contact: {
      name: "Mlungisi Ndlovu",
      phone: "+27 63 882 4450",
      email: "mlungisi@wefixsa.org",
    },
  },
  {
    id: 9,
    title: "River Restoration Project",
    location: "Parys, Free State",
    city: "Parys",
    province: "Free State",
    distance: 10.4,
    date: "2025-12-17",
    desc: "Help restore local riverbanks by removing waste and invasive plants.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    category: "Environment",
    contact: {
      name: "Boitumelo Seete",
      phone: "+27 67 778 9987",
      email: "boitumelo@wefixsa.org",
    },
  },
  {
    id: 10,
    title: "Holiday Toy Drive",
    location: "East London, Eastern Cape",
    city: "East London",
    province: "Eastern Cape",
    distance: 9.8,
    date: "2025-12-20",
    desc: "Collect and wrap toys for underprivileged children for Christmas.",
    image: "https://images.unsplash.com/photo-1573676117762-766a65be24b9",
    category: "Community",
    contact: {
      name: "Amanda Jacobs",
      phone: "+27 82 112 3344",
      email: "amanda@wefixsa.org",
    },
  },
  {
    id: 11,
    title: "Blood Donation Campaign",
    location: "Cape Town, Western Cape",
    city: "Cape Town",
    province: "Western Cape",
    distance: 3.1,
    date: "2025-12-22",
    desc: "Join our blood drive and help save lives this festive season.",
    image: "https://images.unsplash.com/photo-1576765607924-b0b4b0efed4e",
    category: "Health",
    contact: {
      name: "Chad Fortuin",
      phone: "+27 84 543 2291",
      email: "chad@wefixsa.org",
    },
  },
  {
    id: 12,
    title: "Community Garden Workshop",
    location: "Port Elizabeth, Eastern Cape",
    city: "Port Elizabeth",
    province: "Eastern Cape",
    distance: 7.2,
    date: "2025-12-27",
    desc: "Help build sustainable gardens and teach food-growing techniques.",
    image: "https://images.unsplash.com/photo-1597764699513-df7fd40e8f9b",
    category: "Agriculture",
    contact: {
      name: "Zodwa Ngwenya",
      phone: "+27 71 201 9950",
      email: "zodwa@wefixsa.org",
    },
  },
  {
    id: 13,
    title: "Community Recycling Initiative",
    location: "Kimberley, Northern Cape",
    city: "Kimberley",
    province: "Northern Cape",
    distance: 5.6,
    date: "2026-01-03",
    desc: "Join our recycling awareness day and assist with plastic collection.",
    image: "https://images.unsplash.com/photo-1622019433660-7de5c9f28df6",
    category: "Environment",
    contact: {
      name: "Neo Maseko",
      phone: "+27 74 554 6650",
      email: "neo@wefixsa.org",
    },
  },
  {
    id: 14,
    title: "Health Awareness Walk",
    location: "Nelspruit, Mpumalanga",
    city: "Nelspruit",
    province: "Mpumalanga",
    distance: 4.9,
    date: "2026-01-07",
    desc: "Join a walkathon promoting healthy living and disease prevention.",
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    category: "Health",
    contact: {
      name: "Ayanda Nkosi",
      phone: "+27 62 544 1100",
      email: "ayanda@wefixsa.org",
    },
  },
  {
    id: 15,
    title: "Wildlife Conservation Drive",
    location: "Kruger Park, Limpopo",
    city: "Phalaborwa",
    province: "Limpopo",
    distance: 18.4,
    date: "2026-01-10",
    desc: "Assist park rangers with data collection and anti-poaching patrols.",
    image: "https://images.unsplash.com/photo-1536610318658-0a9f9b9e8c3c",
    category: "Animal Welfare",
    contact: {
      name: "Peter Maluleke",
      phone: "+27 79 301 5510",
      email: "peter@wefixsa.org",
    },
  },
  {
    id: 16,
    title: "Women's Empowerment Workshop",
    location: "Polokwane, Limpopo",
    city: "Polokwane",
    province: "Limpopo",
    distance: 6.8,
    date: "2026-01-14",
    desc: "Support women with business, digital, and leadership training.",
    image: "https://images.unsplash.com/photo-1588075592446-2499c89b4e00",
    category: "Community",
    contact: {
      name: "Nthabiseng Shai",
      phone: "+27 66 882 4411",
      email: "nthabiseng@wefixsa.org",
    },
  },
  {
    id: 17,
    title: "School Renovation Project",
    location: "Tembisa, Gauteng",
    city: "Tembisa",
    province: "Gauteng",
    distance: 5.9,
    date: "2026-01-18",
    desc: "Help paint classrooms and fix playgrounds at a local primary school.",
    image: "https://images.unsplash.com/photo-1606788075761-4deec3b2cde0",
    category: "Education",
    contact: {
      name: "Brian Khosa",
      phone: "+27 61 722 9941",
      email: "brian@wefixsa.org",
    },
  },
  {
    id: 18,
    title: "Food Garden Initiative",
    location: "Mthatha, Eastern Cape",
    city: "Mthatha",
    province: "Eastern Cape",
    distance: 9.1,
    date: "2026-01-20",
    desc: "Support communities in setting up backyard vegetable gardens.",
    image: "https://images.unsplash.com/photo-1589135784471-36c1d338dfd7",
    category: "Agriculture",
    contact: {
      name: "Andile Mxenge",
      phone: "+27 73 211 5540",
      email: "andile@wefixsa.org",
    },
  },
  {
    id: 19,
    title: "Coastal Education Tour",
    location: "Mossel Bay, Western Cape",
    city: "Mossel Bay",
    province: "Western Cape",
    distance: 7.3,
    date: "2026-01-25",
    desc: "Teach students about marine life and environmental protection.",
    image: "https://images.unsplash.com/photo-1534430480872-3b5e47ffb48c",
    category: "Education",
    contact: {
      name: "Kayla Petersen",
      phone: "+27 79 222 6632",
      email: "kayla@wefixsa.org",
    },
  },
  {
    id: 20,
    title: "Public Park Beautification",
    location: "George, Western Cape",
    city: "George",
    province: "Western Cape",
    distance: 6.2,
    date: "2026-01-30",
    desc: "Assist in planting flowers, repainting benches, and improving park areas.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b",
    category: "Environment",
    contact: {
      name: "Luyanda Moyo",
      phone: "+27 64 772 8890",
      email: "luyanda@wefixsa.org",
    },
  },
];


// --- DOM ELEMENTS ---
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");
const filterProvince = document.getElementById("filterProvince");
const refreshBtn = document.getElementById("refreshBtn");
const tableBody = document.getElementById("opportunityList");
const modalOverlay = document.getElementById("modalOverlay");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeModal = document.getElementById("closeModal");

let filtered = [...opportunities];

// --- RENDER TABLE ---
function renderTable(list) {
  if (!list.length) {
    tableBody.innerHTML =
      '<tr><td colspan="5" class="loading">No opportunities found.</td></tr>';
    return;
  }

  tableBody.innerHTML = "";
  list.forEach((op) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${op.title}</td>
      <td>${op.city}</td>
      <td>${op.province}</td>
      <td>${op.category}</td>
      <td>${new Date(op.date).toLocaleDateString()}</td>
    `;
    tr.addEventListener("click", () => showModal(op));
    tableBody.appendChild(tr);
  });
}

function showModal(item) {
  modalTitle.textContent = item.title;
  modalContent.innerHTML = `
    <img src="${item.image}" alt="${item.title}" class="modal-image" />
    <p><strong>Category:</strong> ${item.category}</p>
    <p><strong>City:</strong> ${item.city}</p>
    <p><strong>Province:</strong> ${item.province}</p>
    <p><strong>Date:</strong> ${new Date(item.date).toDateString()}</p>
    <hr>
    <p><strong>Description:</strong><br>${item.desc}</p>
    <p><strong>Contact:</strong><br>
      ${item.contact.name}<br>
      ${item.contact.phone}<br>
      ${item.contact.email}
    </p>
  `;
  modalOverlay.classList.add("visible");
}

closeModal.addEventListener("click", () =>
  modalOverlay.classList.remove("visible")
);
modalOverlay.addEventListener("click", (e) => {
  if (e.target === modalOverlay) modalOverlay.classList.remove("visible");
});

function applyFilters() {
  const search = searchInput.value.toLowerCase();
  const cat = filterCategory.value;
  const prov = filterProvince.value;

  filtered = opportunities.filter((op) => {
    const matchesSearch =
      op.title.toLowerCase().includes(search) ||
      op.desc.toLowerCase().includes(search);
    const matchesCat = cat === "All" || op.category === cat;
    const matchesProv = prov === "All" || op.province === prov;
    return matchesSearch && matchesCat && matchesProv;
  });

  renderTable(filtered);
}

refreshBtn.addEventListener("click", () => {
  searchInput.value = "";
  filterCategory.value = "All";
  filterProvince.value = "All";
  renderTable(opportunities);
});

searchInput.addEventListener("input", applyFilters);
filterCategory.addEventListener("change", applyFilters);
filterProvince.addEventListener("change", applyFilters);

renderTable(opportunities);


const calTitle = document.getElementById("calTitle");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const dayEvents = document.getElementById("dayEvents");

let current = new Date(); 

const eventMap = opportunities.reduce((map, op) => {
  const d = new Date(op.date);
  const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  if (!map[key]) map[key] = [];
  map[key].push(op);
  return map;
}, {});

function renderCalendar(year, month) {
  calendarGrid.innerHTML = "";
  dayEvents.innerHTML = "";

  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });
  calTitle.textContent = `${monthName} ${year}`;

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay(); // 0 Sun - 6 Sat
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevDays = startWeekday;
  const prevMonthDays = new Date(year, month, 0).getDate(); // last day of prev month

  for (let i = prevDays - 1; i >= 0; i--) {
    const dayNum = prevMonthDays - i;
    const cell = document.createElement("div");
    cell.className = "cal-cell other-month";
    cell.textContent = dayNum;
    calendarGrid.appendChild(cell);
  }

  const today = new Date();
  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "cal-cell";
    cell.textContent = day;

    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const hasEvents = !!eventMap[key];

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("today");
    }

    if (hasEvents) {
      cell.classList.add("has-event");

      const dot = document.createElement("span");
      dot.className = "event-dot";
      cell.appendChild(dot);

      const count = document.createElement("span");
      count.className = "event-count";
      count.textContent = eventMap[key].length;
      cell.appendChild(count);

      cell.addEventListener("click", () => showDayEvents(key));
    }

    calendarGrid.appendChild(cell);
  }

  const totalCells = prevDays + daysInMonth;
  const nextCells = (7 - (totalCells % 7)) % 7;
  for (let i = 1; i <= nextCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cal-cell other-month";
    cell.textContent = i;
    calendarGrid.appendChild(cell);
  }
}

function showDayEvents(key) {
  const items = eventMap[key] || [];
  const niceDate = new Date(key).toDateString();

  if (!items.length) {
    dayEvents.innerHTML = `<h4>${niceDate}</h4><p>No opportunities on this date.</p>`;
    return;
  }

  const listHtml = items
    .map(
      (op) => `
      <div class="event-item">
        <div class="event-title">${op.title}</div>
        <div class="event-meta">${op.city} • ${op.province} • ${op.category}</div>
        <div class="event-meta">Contact: ${op.contact.name} • ${op.contact.phone}</div>
      </div>
    `
    )
    .join("");

  dayEvents.innerHTML = `<h4>${niceDate}</h4>${listHtml}`;
}

prevMonthBtn.addEventListener("click", () => {
  current.setMonth(current.getMonth() - 1);
  renderCalendar(current.getFullYear(), current.getMonth());
});
nextMonthBtn.addEventListener("click", () => {
  current.setMonth(current.getMonth() + 1);
  renderCalendar(current.getFullYear(), current.getMonth());
});

renderCalendar(current.getFullYear(), current.getMonth());
