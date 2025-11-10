const outages = [
  {
    id: 1,
    date: "2025-11-12",
    type: "Electricity",
    area: "Sandton",
    reason: "Scheduled maintenance",
    duration: "08:00 - 15:00",
  },
  {
    id: 2,
    date: "2025-11-16",
    type: "Water",
    area: "Midrand",
    reason: "Pipe repairs",
    duration: "09:00 - 18:00",
  },
  {
    id: 3,
    date: "2025-11-21",
    type: "Electricity",
    area: "Tembisa",
    reason: "Substation upgrade",
    duration: "06:00 - 13:00",
  },
  {
    id: 4,
    date: "2025-12-01",
    type: "Water",
    area: "Pretoria East",
    reason: "Reservoir cleaning",
    duration: "10:00 - 17:00",
  },
];

const calTitle = document.getElementById("calTitle");
const calendarGrid = document.getElementById("calendarGrid");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const dayEvents = document.getElementById("dayEvents");

let current = new Date();

const outageMap = outages.reduce((map, o) => {
  const d = new Date(o.date);
  const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  if (!map[key]) map[key] = [];
  map[key].push(o);
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
    const hasOutage = !!outageMap[key];

    if (
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      cell.classList.add("today");
    }

    if (hasOutage) {
      cell.classList.add("has-event");

      const dot = document.createElement("span");
      dot.className = "event-dot";
      cell.appendChild(dot);

      const count = document.createElement("span");
      count.className = "event-count";
      count.textContent = outageMap[key].length;
      cell.appendChild(count);

      cell.addEventListener("click", () => showDayOutages(key));
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

function showDayOutages(key) {
  const events = outageMap[key] || [];
  const niceDate = new Date(key).toDateString();

  if (!events.length) {
    dayEvents.innerHTML = `<h4>${niceDate}</h4><p>No outages on this date.</p>`;
    return;
  }

  const html = events
    .map(
      (e) => `
      <div class="event-item">
        <div class="event-title">${e.type} Outage</div>
        <div class="event-meta"><strong>Area:</strong> ${e.area}</div>
        <div class="event-meta"><strong>Duration:</strong> ${e.duration}</div>
        <div class="event-meta"><strong>Reason:</strong> ${e.reason}</div>
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

renderCalendar(current.getFullYear(), current.getMonth());
