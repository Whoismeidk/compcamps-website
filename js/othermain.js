var favSongs = [
  {
  order: 1,
  song: "Space Cruise",
  artist: "Ben Prunty",
  link: `<iframe src="https://www.youtube.com/embed/WiXWfxHHdAU" frameborder="0" allowfullscreen></iframe>`,
  },
  {
  order: 2,
  song: "Live and Learn",
  artist: "Crush 40",
  link: `<iframe src="https://www.youtube.com/embed/3gPBmDptqlQ" frameborder="0" allowfullscreen></iframe>`,
  },
  {
  order: 3,
  song: "Never Gonna Give You Up",
  artist: "Rick Astley",
  link: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>`,
  },
];
console.log(favSongs);
var tbody = document.querySelector("tbody");
for(var i in favSongs) {
  var tr = document.createElement("tr");
  //order, song artist, link
      for (var j in favSongs[i]){
      var td1 = document.createElement("td");
      td1.innerText = favSongs[i][j];
      if(j == 'link'){
        td1.innerHTML = favSongs[i][j];
      } else {
        td1.innerText = favSongs[i][j];

      }
      tr.appendChild(td1);
    }
    tbody.appendChild(tr);
    console.log(tr);

}

tbody.addEventListener('click', function() {
tbody.style.backgroundColor = '#ffccff';

});



console.log(tbody);

//var td2 = document.createElement("td");
//var td3 = document.createElement("td");

//tr.appendChild(td2);
//tr.appendChild(td3);
//console.log(tr);
