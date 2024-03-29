'use strict';

var PIC_DATA = 'picData';
var picStorageArray = [];
var randomPicArray = [];
var previousArray = [];
var clickCounter = 0;
var placeholder0 = document.getElementById('placeholder-0');
var placeholder1 = document.getElementById('placeholder-1');
var placeholder2 = document.getElementById('placeholder-2');
var clearDataReference = document.getElementById('clear');
var reloadReference = document.getElementById('reload');
var tallyReference = document.getElementById('tally');
var maxReference = document.getElementById('max');
var finishReference = document.getElementById('head');
const MAX_CLICK_COUNTER = 25;

tallyReference.textContent = MAX_CLICK_COUNTER - clickCounter;
maxReference.textContent = MAX_CLICK_COUNTER;

function getRandomPicIndex() {
  return Math.floor(Math.random() * (picStorageArray.length));
}

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

  picStorageArray[randomPicArray[0]].render(placeholder0);
  picStorageArray[randomPicArray[1]].render(placeholder1);
  picStorageArray[randomPicArray[2]].render(placeholder2);
}

var Pic = function (name, picture) {
  this.name = name;
  this.picture = picture;
  this.timesClicked = 0;
  this.timesShown = 0;
  this.markClick = function () {
    this.timesClicked++;
  };
  this.render = function (domReference) {
    domReference.src = this.picture;
    this.timesShown++;
    console.log(`${this.name} has been shown ${this.timesShown} times`);
  };
  this.loadData = function (data) {
    this.timesClicked = data.timesClicked;
    this.timesShown = data.timesShown;
    this.name = data.name;
    this.picture = data.picture;
  };
};

if (localStorage.getItem(PIC_DATA) === null) {

  var pic00 = new Pic('usb', './img/usb.gif');
  var pic01 = new Pic('bag', './img/bag.jpg');
  var pic02 = new Pic('banana', './img/banana.jpg');
  var pic03 = new Pic('bathroom', './img/bathroom.jpg');
  var pic04 = new Pic('boots', './img/boots.jpg');
  var pic05 = new Pic('breakfast', './img/breakfast.jpg');
  var pic06 = new Pic('bubblegum', './img/bubblegum.jpg');
  var pic07 = new Pic('chair', './img/chair.jpg');
  var pic08 = new Pic('cthulhu', './img/cthulhu.jpg');
  var pic09 = new Pic('dog-duck', './img/dog-duck.jpg');
  var pic10 = new Pic('dragon', './img/dragon.jpg');
  var pic11 = new Pic('pen', './img/pen.jpg');
  var pic12 = new Pic('pet-sweep', './img/pet-sweep.jpg');
  var pic13 = new Pic('scissors', './img/scissors.jpg');
  var pic14 = new Pic('shark', './img/shark.jpg');
  var pic15 = new Pic('tauntaun', './img/tauntaun.jpg');
  var pic16 = new Pic('unicorn', './img/unicorn.jpg');
  var pic17 = new Pic('water-can', './img/water-can.jpg');
  var pic18 = new Pic('wine-glass', './img/wine-glass.jpg');
  var pic19 = new Pic('sweep', './img/sweep.png');

  var picVariableArray = [pic00, pic01, pic02, pic03, pic04, pic05
    , pic06, pic07, pic08, pic09, pic10, pic11, pic12, pic13, pic14
    , pic15, pic16, pic17, pic18, pic19];

  for (var index = 0; index < picVariableArray.length; index++) {
    picStorageArray.push(picVariableArray[index]);
  }
} else {
  var jsonData = localStorage.getItem(PIC_DATA);
  var dataArray = JSON.parse(jsonData);

  for (index = 0; index < dataArray.length; index++) {
    var newPic = new Pic('', '');

    newPic.loadData(dataArray[index]);
    console.log(newPic);
    picStorageArray.push(newPic);
  }
}

function clickManager(event) {
  if (clickCounter < (MAX_CLICK_COUNTER - 1)) {
    clickCounter++;
    tallyReference.textContent = MAX_CLICK_COUNTER - clickCounter;
    console.log(`\nclickCounter: ${clickCounter}, ${MAX_CLICK_COUNTER - clickCounter} clicks remaining`);
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
    savePicDataToLocalStorage();
    placeholder0.removeEventListener('click', clickManager);
    placeholder1.removeEventListener('click', clickManager);
    placeholder2.removeEventListener('click', clickManager);
    createPicChart();
  }
}

function savePicDataToLocalStorage() {
  var jsonData = JSON.stringify(picStorageArray);
  localStorage.setItem(PIC_DATA, jsonData);
}

function clearDataManager(event) {
  if (event.type === 'mousedown') {
    clearDataReference.removeEventListener('mousedown', clearDataManager);
    clearDataReference.style.opacity = '.5';
    document.addEventListener('mouseup', clearDataManager);
  } else {
    document.removeEventListener('mouseup', clearDataManager);
    clearDataReference.style.opacity = '1';
    localStorage.removeItem('picData');
    clearDataReference.addEventListener('mousedown', clearDataManager);
    picStorageArray = [];
    createPicChart();
  }
}

function reloadManager(event) {
  if (event.type === 'mousedown') {
    reloadReference.removeEventListener('mousedown', reloadManager);
    reloadReference.style.opacity = '.5';
    document.addEventListener('mouseup', reloadManager);
  } else {
    document.removeEventListener('mouseup', reloadManager);
    reloadReference.style.opacity = '1';
    location.reload();
  }
}

select3PicsAndRender();

placeholder0.addEventListener('click', clickManager);
placeholder1.addEventListener('click', clickManager);
placeholder2.addEventListener('click', clickManager);
clearDataReference.addEventListener('mousedown', clearDataManager);
reloadReference.addEventListener('mousedown', reloadManager);

function createPicChart() {
  var nameArray = [];
  var clickArray = [];
  var shownArray = [];
  finishReference.textContent = 'Great! Here are your results below';
  clearDataReference.textContent = 'CLEAR';
  clearDataReference.style.visibility = 'visible';
  reloadReference.textContent = 'RELOAD';
  reloadReference.style.visibility = 'visible';

  for (var index = 0; index < picStorageArray.length; index++) {
    nameArray.push(picStorageArray[index].name);
    clickArray.push(picStorageArray[index].timesClicked);
    shownArray.push(picStorageArray[index].timesShown);
  }

  var context = document.getElementById('chart').getContext('2d');
  var picChart = new Chart(context, {
    type: 'bar',
    data: {
      labels: nameArray,
      datasets: [
        {
          label: 'Clicked',
          data: clickArray,
          backgroundColor: 'white',
          borderColor: 'black',
        },
        {
          label: 'Shown',
          data: shownArray,
          backgroundColor: 'orange',
          borderColor: 'black',
        }
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              increments: 1,
            }
          },
        ],
      }
    },
  });
}
