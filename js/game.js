var items = [
  {name: 'apple', value: 4},
  {name: 'mandrain orange', value: 3},
  {name: 'rifle', value: 50},
  {name: 'desktop', value: 75},
  {name: 'bowling ball', value: 10},
  {name: 'humanitis', value: 100}
];

var count = 0;
var first = document.querySelector("#first");
var second = document.querySelector('#second');
var firstDiv = document.querySelector(".first");
var secondDiv = document.querySelector('.second');

first.addEventListener('click', function() {
  if(firstDiv.value < secondDiv.value) {
    count++;
    console.log(count);
    setItems();
  } else {
    console.log("you're dumb");
  }
});

second.addEventListener('click', function() {
  if(firstDiv.value > secondDiv.value) {
    count++;
    console.log(count);
    setItems();
  } else {
    console.log("you're dumb");
  }
});

function setItems() {
  function rand(first) {
    var i = Math.floor(Math.random()*(items.length));
    if(i == first) {
      rand(first);
    } else {
      return i;
    }
  }
  var i = rand();
  firstDiv.value = items[i].value;
  firstDiv.innerText = items[i].name;
  var j = rand(i);
  secondDiv.value = items[j].value;
  secondDiv.innerText = items[j].name;
}

setItems();
