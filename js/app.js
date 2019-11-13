'use strict';

//    Here I declare my pictures array (picStorageArray),
//    my randomly displayed three pictures array (randomPicArray),
//    my array of the previous three numbers once applicable,
//    how many clicks out maximum clicks I've already clicked (clickCounter),
//    the total custom maximum number of click iterations (MAX_CLICK_COUNTER),
//    and my placeholder image variables to register my event listeners later

var picStorageArray = [];
var randomPicArray = [];
var previousArray = [];
var clickCounter = 0;
const MAX_CLICK_COUNTER = 25;

var placerholder0 = document.getElementById('placeholder-0');
var placerholder1 = document.getElementById('placeholder-1');
var placerholder2 = document.getElementById('placeholder-2');

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

  picStorageArray[randomPicArray[0]].render(placerholder0);
  picStorageArray[randomPicArray[1]].render(placerholder1);
  picStorageArray[randomPicArray[2]].render(placerholder2);
}

//    My Pic constructor function that sets name and path for each of 20 pictures,
//    along with the timesClicked, and adding these to my main picStorageArray
//    markClick method adds increments my total click count to be matched against MAX_CLICK_COUNT
//    render method grabs the domReference for each picture to be dispayed

var Pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.markClick = function () {
    this.timesClicked++;
  };
  this.render = function (domReference) {
    domReference.src = picture;
    this.timesShown++;
    console.log(`${this.name} has been shown ${this.timesShown} times`);
  };
  picStorageArray.push(this);
};

//    Creates objects for each picture from my Pic constructor with their id and src.

var picture0 = new Pic('usb', './img/usb.gif');
var picture01 = new Pic('bag', './img/bag.jpg');
var picture02 = new Pic('banana', './img/banana.jpg');
var picture03 = new Pic('bathroom', './img/bathroom.jpg');
var picture04 = new Pic('boots', './img/boots.jpg');
var picture05 = new Pic('breakfast', './img/breakfast.jpg');
var picture06 = new Pic('bubblegum', './img/bubblegum.jpg');
var picture07 = new Pic('chair', './img/chair.jpg');
var picture08 = new Pic('cthulhu', './img/cthulhu.jpg');
var picture09 = new Pic('dog-duck', './img/dog-duck.jpg');
var picture10 = new Pic('dragon', './img/dragon.jpg');
var picture11 = new Pic('pen', './img/pen.jpg');
var picture12 = new Pic('pet-sweep', './img/pet-sweep.jpg');
var picture13 = new Pic('scissors', './img/scissors.jpg');
var picture14 = new Pic('shark', './img/shark.jpg');
var picture15 = new Pic('tauntaun', './img/tauntaun.jpg');
var picture16 = new Pic('unicorn', './img/unicorn.jpg');
var picture17 = new Pic('water-can', './img/water-can.jpg');
var picture18 = new Pic('wine-glass', './img/wine-glass.jpg');
var picture19 = new Pic('sweep', './img/sweep.png');

//    The clickManager method registers click events and increments the clickCounter,
//    checks against the MAX_CLICK_COUNTER,
//    sets a local picIndex to then check which image the target id of the click matches,
//    adds the clicked image to a variable with which to reference its specific markClick()

function clickManager(event) {
  clickCounter++;
  console.log(`\nclickCounter: ${clickCounter}, ${MAX_CLICK_COUNTER-clickCounter} clicks remaining`);

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
    alert(`Done with ${MAX_CLICK_COUNTER} clicks`)
    //createPicChart();
  }
}

//    Calls select3PicsAndRender() to run the rendering
//    and my event listeners for clicking an image

select3PicsAndRender();

placerholder0.addEventListener('click', clickManager);
placerholder1.addEventListener('click', clickManager);
placerholder2.addEventListener('click', clickManager);

// C H A R T >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
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
} */
