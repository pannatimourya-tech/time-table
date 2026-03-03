function buildTable(habits, year) {
  const table = document.getElementById("habitTable");
  table.innerHTML = "";

  const days = getDaysInYear(year);

  const headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Habit</th>";
  days.forEach(day => {
    const th = document.createElement("th");
    th.textContent = day.getDate();
    headerRow.appendChild(th);
  });
  table.appendChild(headerRow);

  habits.forEach((habit, index) => {
    const row = document.createElement("tr");
    const habitCell = document.createElement("td");
    habitCell.textContent = habit.name;
    row.appendChild(habitCell);

    days.forEach((day, dayIndex) => {
      const td = document.createElement("td");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = habit.days?.[dayIndex] || false;

      checkbox.addEventListener("change", () => {
        habit.days[dayIndex] = checkbox.checked;
        saveData(appData);
        updateProgress();
        updateChart();
      });

      td.appendChild(checkbox);
      row.appendChild(td);
    });

    table.appendChild(row);
  });
}
