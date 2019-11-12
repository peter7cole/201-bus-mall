'use strict';

var picStorageArray = [];
var randomPicArray = [];
var clickCounter = 0;
const MAX_CLICK_COUNTER = 25;

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorageArray.length));
}

function select3PicsAndRender() {
  randomPicArray = [];
  while (randomPicArray.length < 3) {
    var nextRandomValue = getRandomPicIndex();
    if (!randomPicArray.includes(nextRandomValue)) {
      randomPicArray.push(nextRandomValue);
    }
  }
  console.log(`randomPicArray: ${randomPicArray}`);

  var placerholder0 = document.getElementById('placeholder-0');
  var placerholder1 = document.getElementById('placeholder-1');
  var placerholder2 = document.getElementById('placeholder-2');

  picStorageArray[randomPicArray[0]].render(placerholder0);
  picStorageArray[randomPicArray[1]].render(placerholder1);
  picStorageArray[randomPicArray[2]].render(placerholder2);
}


var Pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.markClick = function() {
    this.timesClicked++;
  };
  this.render = function (domReference) {
    domReference.src = picture;
  };
  picStorageArray.push(this);
  console.log(`Pic: ${Pic}`);
};

var picture0 = new Pic('picture-0', './img/pic0.jpg');
var picture1 = new Pic('picture-1', './img/pic1.jpg');
var picture2 = new Pic('picture-2', './img/pic2.jpg');
var picture3 = new Pic('picture-3', './img/pic3.jpg');
var picture4 = new Pic('picture-4', './img/pic4.jpg');
var picture5 = new Pic('picture-5', './img/pic5.jpg');
var picture6 = new Pic('picture-6', './img/pic6.jpg');
var picture7 = new Pic('picture-7', './img/pic7.jpg');
var picture8 = new Pic('picture-8', './img/pic8.jpg');
var picture9 = new Pic('picture-9', './img/pic9.jpg');

function clickManager(event) {
  clickCounter++;
  if (clickCounter < MAX_CLICK_COUNTER) {
    var picIndex;

    if (event.target.id === 'placeholder-0') {
      picIndex = 0;
    } else if (event.target.id === 'placeholder-1') {
      picIndex = 1;
    } else {
      picIndex = 2;
    }

    var clickedPic = picStorageArray[randomPicArray[picIndex]];
    clickedPic.markClick();
    select3PicsAndRender();
  } else {
    createPicChart();
  }
  
}

select3PicsAndRender();

var placerholder0 = document.getElementById('picture-0');
var placerholder1 = document.getElementById('picture-1');
var placerholder2 = document.getElementById('picture-2');

placerholder0.addEventListener('click', clickManager);
placerholder1.addEventListener('click', clickManager);
placerholder2.addEventListener('click', clickManager);


// chart

function createPicChart() {
  var nameArray = [];
  var clickArray = [];

  for (index=0; index < picStorageArray.length; index++){
    nameArray.push(picStorageArray[index].name);
    clickArray.push(picStorageArray[index].timesClicked);
  }

  // creates 2d stuff
  var context = document.getElementById('chart').getContext('2d');
  var picChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [
        {
          label: 'Goat Clicks',
          data: clickArray,
          backgroundColor: '#828282',
          bordercolor: 'black',
        }
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: 'true',
            }
          },
        ],
      },
    },
  }
}

