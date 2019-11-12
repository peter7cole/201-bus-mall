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

  // SELECT 3 RANDOM INDICES
  while (randomPicArray.length < 3) {
    var nextRandomValue = getRandomPicIndex();
    if (!randomPicArray.includes(nextRandomValue)) {
      randomPicArray.push(nextRandomValue);
    }
  }

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
  var markClick = function(){
    this.timesClicked++;
  };

  this.render = function (domReference) {
    domReference.src = picture;
  };

  picStorageArray.push(this);
};

var picture0 = new Pic('Picture 1', './img/pic0.jpg');
var picture1 = new Pic('Picture 2', './img/pic1.jpg');
var picture2 = new Pic('Picture 3', './img/pic2.jpg');
var picture3 = new Pic('Picture 4', './img/pic3.jpg');
var picture4 = new Pic('Picture 5', './img/pic4.jpg');
var picture5 = new Pic('Picture 6', './img/pic5.jpg');
var picture6 = new Pic('Picture 6', './img/pic6.jpg');
var picture7 = new Pic('Picture 6', './img/pic7.jpg');
var picture8 = new Pic('Picture 6', './img/pic8.jpg');
var picture9 = new Pic('Picture 6', './img/pic9.jpg');

// Pic.render(picture1);


function clickManager(event) {
  clickCounter++;
  if (clickCounter < MAX_CLICK_COUNTER) {
    var picIndex;

    if (event.target.id === 'picture-0') {
      picIndex = 0;
    } else if (event.target.id === 'picture-1') {
      picIndex = 1;
    } else {
      picIndex = 2;
    }

    var clickedPic = picStorageArray[randomPicArray[picIndex]];
    clickedPic.markClick();
    select3PicsAndRender();
  } else {
    alert('game over');
  }
}

select3PicsAndRender();

var placerholder0 = document.getElementById('picture-0');
var placerholder1 = document.getElementById('picture-1');
var placerholder2 = document.getElementById('picture-2');

placerholder0.addEventListener('click',clickManager);
placerholder1.addEventListener('click',clickManager);
placerholder2.addEventListener('click',clickManager);


