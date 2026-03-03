function saveData(data) {
  localStorage.setItem("habitData", JSON.stringify(data));
}

function loadData() {
  return JSON.parse(localStorage.getItem("habitData")) || {};
}
