const areaLog = document.getElementById("log");
const inpBtn = document.getElementById("inpBtn");
// areaLog.innerHTML = "come on!"

document.addEventListener('DOMContentLoaded', () => {
  inpBtn.onclick = function() {
    let newText = document.getElementById("inp").value;
    areaLog.innerHTML += "<p>"+ newText +"</p>";
    document.getElementById("inp").value = "";
  }
});
