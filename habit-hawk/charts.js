let chart;

function updateChart() {
  const ctx = document.getElementById("habitChart");

  const labels = appData.habits.map(h => h.name);
  const data = appData.habits.map(h => 
    h.days ? h.days.filter(d => d).length : 0
  );

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Completed Days",
        data: data,
        backgroundColor: "black"
      }]
    }
  });
}
