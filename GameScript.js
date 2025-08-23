function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function AddTiles() {
const parentElement = document.querySelector(".container");

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 10; j++) {
      const newElement = document.createElement('img');
      newElement.src = '/Edmund/images/homefloor.gif';
      parentElement.appendChild(newElement); 
    }
  }

  const newElement = document.createElement('div');
  newElement.setAttribute("id", "messagebar");
  parentElement.appendChild(newElement); 

} 
AddTiles();