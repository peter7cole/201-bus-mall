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

  // invariants
  // randomPicArray has three pics!
  picStorageArray[randomPicArray[0]].render(placerholder0);
  picStorageArray[randomPicArray[1]].render(placerholder1);
  picStorageArray[randomPicArray[2]].render(placerholder2);

}

var pic = function (name, picture) {
  this.name = name;
  this.picture = picture;

  var markClick;

  this.render = function (domReference) {
    domReference.src = picture;
  };

  picStorageArray.push(this);
};

var picture0 = new pic('Picture 1', './img/pic0.jpg');
var picture1 = new pic('Picture 2', './img/pic1.jpg');
var picture2 = new pic('Picture 3', './img/pic2.jpg');
var picture3 = new pic('Picture 4', './img/pic3.jpg');
var picture4 = new pic('Picture 5', './img/pic4.jpg');
var picture5 = new pic('Picture 6', './img/pic5.jpg');

pic.render(picture1);


function clickManager(event) {
  clickCounter++;
  if (clickCounter < MAX_CLICK_COUNTER) {
    alert(event.target.id);
    var picIndex;

    if (event.targert.id === 'picture-0') {
      picIndex = 0;
    } else if (event.targert.id === 'picture-1') {
      picIndex = 1;
    } else {
      picIndex = 2;
    }

    var clickedPic = picStorageArray[randomPicArray[picIndex]];
    clickedPic.markClick();
    //mising
  } else {
    alert('game over');
  }
}



select3PicsAndRender();

var placerholder0 = document.getElementById('picture-0');
var placerholder1 = document.getElementById('picture-1');
var placerholder2 = document.getElementById('picture-2');

