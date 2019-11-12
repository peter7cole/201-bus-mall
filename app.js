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

  var placerholder0 = document.getElementById('picture-0');
  var placerholder1 = document.getElementById('picture-1');
  var placerholder2 = document.getElementById('picture-2');

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

// Pic.render(picture1);

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
    alert('Game Over!');
  }
  // I know the id of the clicked picture
  // I know I have an array called randomGoats with the randomly selected goats
  // I know I have an array called goatStorage with all the goats
  // I know that I can do goatStorage[randomGoats[...]] to select a specific goat
}

select3PicsAndRender();

var placerholder0 = document.getElementById('picture-0');
var placerholder1 = document.getElementById('picture-1');
var placerholder2 = document.getElementById('picture-2');

placerholder0.addEventListener('click',clickManager);
placerholder1.addEventListener('click',clickManager);
placerholder2.addEventListener('click',clickManager);

//  have a temporary array to keep track of currently selecte values ---> this is how I do it :D  ---> this is the way to go ;), but I'm going to leave this for lab

// keep track of the one's the user has voted

// Event listeners for the pictures and for anything that's not a picture

// create a loop for 25 iterations
// at the end, show the list

// Tasks
// Picture Constructor
// Name
// Piture
// Adding pictures in global array
// Render function for constructor
// Select 3 pictures from the array
// Select a random number
// Check that the number is unique
// Render the 3 pictures in the slot
