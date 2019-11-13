'use strict';

//    Here I declare my pictures array (picStorageArray),
//    my randomly displayed three pictures array (randomPicArray),
//    my array of the previous three numbers once applicable,
//    how many clicks out maximum clicks I've already clicked (clickCounter),
//    and the total custom maximum number of click iterations (MAX_CLICK_COUNTER)

var picStorageArray = [];
var randomPicArray = [];
var previousArray = [];
var clickCounter = 0;
const MAX_CLICK_COUNTER = 25;

//    getRandomPicIndex() returns a random picture (by index number) from my main picture array

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorageArray.length));
}

//    select3PicsAndRender() resets the 3 random pictures,
//    randomly selects 3 pictures that aren't repeated or previously used in the last set,
//    and populates them in randomPicArray, resetting previousArray to that afterwards,
//    gets my placeholder images, and renders them to the DOM.

function select3PicsAndRender() {
  randomPicArray = [];
  console.log(`previousArray: ${previousArray}`);
  while (randomPicArray.length < 3) {
    var nextRandomValue = getRandomPicIndex();
    if ((!randomPicArray.includes(nextRandomValue)) && (!previousArray.includes(nextRandomValue))) {
      randomPicArray.push(nextRandomValue);
    }
  }
  previousArray = randomPicArray;
  console.log(`randomPicArray: ${randomPicArray}`);
  console.log(`previousArray: ${previousArray}`);

  var placerholder0 = document.getElementById('placeholder-0');
  var placerholder1 = document.getElementById('placeholder-1');
  var placerholder2 = document.getElementById('placeholder-2');

  picStorageArray[randomPicArray[0]].render(placerholder0);
  picStorageArray[randomPicArray[1]].render(placerholder1);
  picStorageArray[randomPicArray[2]].render(placerholder2);
}

//    My Pic constructor function that sets name and path for each of 20 pictures,
//    along with the timesClicked, 

var Pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.markClick = function() {
    this.timesClicked++;
  };
  this.render = function (domReference) {
    domReference.src = picture;
  };
  picStorageArray.push(this);
  console.log(`Pic: ${Pic}`);
};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var picture0 = new Pic('picture-0', './img/usb.gif');
var picture01 = new Pic('picture-01', './img/bag.jpg');
var picture02 = new Pic('picture-02', './img/banana.jpg');
var picture03 = new Pic('picture-03', './img/bathroom.jpg');
var picture04 = new Pic('picture-04', './img/boots.jpg');
var picture05 = new Pic('picture-05', './img/breakfast.jpg');
var picture06 = new Pic('picture-06', './img/bubblegum.jpg');
var picture07 = new Pic('picture-07', './img/chair.jpg');
var picture08 = new Pic('picture-08', './img/cthulhu.jpg');
var picture09 = new Pic('picture-09', './img/dog-duck.jpg');
var picture10 = new Pic('picture-10', './img/dragon.jpg');
var picture11 = new Pic('picture-11', './img/pen.jpg');
var picture12 = new Pic('picture-12', './img/pet-sweep.jpg');
var picture13 = new Pic('picture-13', './img/scissors.jpg');
var picture14 = new Pic('picture-14', './img/shark.jpg');
var picture15 = new Pic('picture-15', './img/tauntaun.jpg');
var picture16 = new Pic('picture-16', './img/unicorn.jpg');
var picture17 = new Pic('picture-17', './img/water-can.jpg');
var picture18 = new Pic('picture-18', './img/wine-glass.jpg');
var picture19 = new Pic('picture-19', './img/sweep.png');

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

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

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

select3PicsAndRender();

var placerholder0 = document.getElementById('picture-0');
var placerholder1 = document.getElementById('picture-1');
var placerholder2 = document.getElementById('picture-2');

placerholder0.addEventListener('click', clickManager);
placerholder1.addEventListener('click', clickManager);
placerholder2.addEventListener('click', clickManager);

/*
// C H A R T >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function createPicChart() {
  var nameArray = [];
  var clickArray = [];

  for (var index = 0; index < picStorageArray.length; index++){
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
          label: 'Pic Clicks',
          data: clickArray,
          backgroundColor: '#828282',
          borderColor: 'black',
        },
        {
          label: 'Pic Clicks',
          data: clickArray,
        }
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            }
          },
        ],
      }
    },
  });
}
*/
