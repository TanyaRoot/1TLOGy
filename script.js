const areaLog = document.getElementById("log");
const inpBtn = document.getElementById("inpBtn");
// const now = new Date();
// const time =  now.getFullYear() + now.getMonth();
// areaLog.innerHTML = "come on!"

// document.addEventListener('DOMContentLoaded', () => {
//   inpBtn.onclick = function() {
//     let newText = document.getElementById("inp").value;
//     areaLog.innerHTML += "<p>"+ newText +"</p>";
//     document.getElementById("inp").value = "";
//   }
// });


inpBtn.addEventListener('click', function() {
  addText()
})

//а теперь зафигачим массив с пушами
let arrAreaLog = [];

function addText() {
  let newText = document.getElementById("inp").value;
  if (newText !== "") {
    arrAreaLog.push(newText);
  } else {
    console.log("there is nothing");
  };
  console.log(arrAreaLog);

  const li = document.createElement("li")
  li.innerHTML = newText
  areaLog.appendChild(li)

  console.log(areaLog);
  document.getElementById("inp").value = "";
}


// createElement
