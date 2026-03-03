function generateYearOptions() {
  const selector = document.getElementById("yearSelector");
  for (let year = 2025; year <= 2030; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    selector.appendChild(option);
  }
}

function getDaysInYear(year) {
  const start = new Date(year, 0, 1);
  const end = new Date(year, 11, 31);
  const days = [];
  while (start <= end) {
    days.push(new Date(start));
    start.setDate(start.getDate() + 1);
  }
  return days;
}
