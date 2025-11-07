// --- GARBAGE COLLECTION DATES ---
const collections = [
  {
    id: 1,
    date: "2025-11-10",
    area: "Sandton",
    zone: "Zone 3",
    type: "Recyclables",
    note: "Green bins only",
  },
  {
    id: 2,
    date: "2025-11-14",
    area: "Midrand",
    zone: "Zone 1",
    type: "General Waste",
    note: "Black bins only",
  },
  {
    id: 3,
    date: "2025-11-18",
    area: "Pretoria East",
    zone: "Zone 5",
    type: "Organic Waste",
    note: "Brown bins - food waste collection",
  },
  {
    id: 4,
    date: "2025-11-25",
    area: "Tembisa",
    zone: "Zone 2",
    type: "Recyclables",
    note: "Glass and plastic only",
  },
  {
    id: 5,
    date: "2025-12-02",
    area: "Johannesburg CBD",
    zone: "Zone 4",
    type: "General Waste",
    note: "Mixed waste pickup",
  },
];

// --- DOM ELEMENTS ---
const calTitle = document.getElementById("calTitle");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const dayEvents = document.getElementById("dayEvents");

let current = new Date();

// Group collections by date
const collectionMap = collections.reduce((map, c) => {
  const d = new Date(c.date);
  const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  if (!map[key]) map[key] = [];
  map[key].push(c);
  return map;
}, {});

function renderCalendar(year, month) {
  calendarGrid.innerHTML = "";
  dayEvents.innerHTML = "";

  const monthName = new Date(year, month).toLocaleString("default", { month: "long" });
  calTitle.textContent = `${monthName} ${year}`;

  const firstDay = new Date(year, month, 1);
  const startWeekday = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const prevDays = startWeekday;
  const prevMonthDays = new Date(year, month, 0).getDate();

  for (let i = prevDays - 1; i >= 0; i--) {
    const cell = document.createElement("div");
    cell.className = "cal-cell other-month";
    cell.textContent = prevMonthDays - i;
    calendarGrid.appendChild(cell);
  }

  const today = new Date();

  for (let day = 1; day <= daysInMonth; day++) {
    const cell = document.createElement("div");
    cell.className = "cal-cell";
    cell.textContent = day;

    const key = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const hasCollection = !!collectionMap[key];

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("today");
    }

    if (hasCollection) {
      cell.classList.add("has-event");

      const dot = document.createElement("span");
      dot.className = "event-dot";
      cell.appendChild(dot);

      const count = document.createElement("span");
      count.className = "event-count";
      count.textContent = collectionMap[key].length;
      cell.appendChild(count);

      cell.addEventListener("click", () => showDayCollections(key));
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

function showDayCollections(key) {
  const events = collectionMap[key] || [];
  const niceDate = new Date(key).toDateString();

  if (!events.length) {
    dayEvents.innerHTML = `<h4>${niceDate}</h4><p>No collections on this date.</p>`;
    return;
  }

  const html = events
    .map(
      (e) => `
      <div class="event-item">
        <div class="event-title">${e.type} Collection</div>
        <div class="event-meta"><strong>Area:</strong> ${e.area}</div>
        <div class="event-meta"><strong>Zone:</strong> ${e.zone}</div>
        <div class="event-meta"><strong>Note:</strong> ${e.note}</div>
      </div>
    `
    )
    .join("");

  dayEvents.innerHTML = `<h4>${niceDate}</h4>${html}`;
}

prevMonthBtn.addEventListener("click", () => {
  current.setMonth(current.getMonth() - 1);
  renderCalendar(current.getFullYear(), current.getMonth());
});
nextMonthBtn.addEventListener("click", () => {
  current.setMonth(current.getMonth() + 1);
  renderCalendar(current.getFullYear(), current.getMonth());
});

// Init
renderCalendar(current.getFullYear(), current.getMonth());
