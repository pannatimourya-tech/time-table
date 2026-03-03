let appData = loadData();
if (!appData.habits) appData.habits = [];

generateYearOptions();

document.getElementById("addHabitBtn").addEventListener("click", () => {
  const name = document.getElementById("newHabit").value;
  if (!name) return;

  appData.habits.push({ name, days: [] });
  saveData(appData);
  buildTable(appData.habits, getSelectedYear());
  updateChart();
});

document.getElementById("exportBtn").addEventListener("click", exportCSV);

document.getElementById("yearSelector").addEventListener("change", () => {
  buildTable(appData.habits, getSelectedYear());
});

function getSelectedYear() {
  return parseInt(document.getElementById("yearSelector").value);
}

function updateProgress() {
  let total = 0;
  let completed = 0;

  appData.habits.forEach(h => {
    if (h.days) {
      total += h.days.length;
      completed += h.days.filter(d => d).length;
    }
  });

  const percent = total ? (completed / total) * 100 : 0;
  document.getElementById("dailyProgressBar").style.width = percent + "%";
}

function exportCSV() {
  let csv = "Habit,Completed Days\n";
  appData.habits.forEach(h => {
    const count = h.days ? h.days.filter(d => d).length : 0;
    csv += `${h.name},${count}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "habit-data.csv";
  link.click();
}

buildTable(appData.habits, new Date().getFullYear());
updateChart();
updateProgress();
