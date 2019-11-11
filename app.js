'use strict';

var picStorage = [];

function getRandomArbitrary() {
  return Math.floor(Math.random() * (picStorage.length));
}

function select3PicsAndRender() {
  var randomPicArray = [];

  // SELECT 3 RANDOM INDICES
  while (randomPicArray.length < 3) {
    var nextRandomValue = getRandomPicIndex();
    if (!randomPicArray.includes(nextRandomValue)) {
      randomPicArray.push(nextRandomValue);
    }
  }
  var placerholder1 = document.getElementById('picture-1');

}

var Pic = function (name, picture) {
  this.name = name;
  this.picture = picture;

  this.render = function (domReference) {
    domReference.src = picture;
  };

  picStorage.push(this);
};

var picture1 = new Pic('Picture 1', './img/pic1.jpg');
var picture2 = new Pic('Picture 2', './img/pic2.jpg');
var picture3 = new Pic('Picture 3', './img/pic3.jpg');
var picture4 = new Pic('Picture 4', './img/pic4.jpg');
var picture5 = new Pic('Picture 5', './img/pic5.jpg');
var picture6 = new Pic('Picture 6', './img/pic6.jpg');

var pic1 = document.getElementById('picture-1');

pic1.render(picture1);
