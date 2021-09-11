var nineAmEl = $('#09_AM');
var tenAmEl = $('#10_AM');
var elevenAmEl = $('#11_AM');
var twelvePmEl = $('#12_PM');
var onePmEl = $('#01_PM');
var twoPmEl = $('#02_PM');
var threePmEl = $('#03_PM');
var fourPmEl = $('#04_PM');
var fivePmEl = $('#05_PM');

hoursArray = [nineAmEl, tenAmEl, elevenAmEl, twelvePmEl, onePmEl, twoPmEl, threePmEl, fourPmEl, fivePmEl];

var button9a = $('#button-9a');
var button10a = $('#button-10a');
var button11a = $('#button-11a');
var button12p = $('#button-12p');
var button1p = $('#button-1p');
var button2p = $('#button-2p');
var button3p = $('#button-3p');
var button4p = $('#button-4p');
var button5p = $('#button-5p');

buttonArray = [button9a, button10a, button11a, button12p, button1p, button2p, button3p, button4p, button5p];





var timeDisplayEl = $('#currentDay');


function displayTime() {
  var today = moment().format('MMM DD, YYYY [at] hh:mm a');
  timeDisplayEl.text(today);
}

setInterval(displayTime, 1000);

var rightNow = moment();
for (i = 0; i < hoursArray.length; i++) {
  var textArea = hoursArray[i];
  var hour = moment(textArea.id, 'hh_A');

  if (rightNow.isAfter(hour, "hour")) {
    hoursArray[i].addClass("past");

  } else if (rightNow.isBefore(hour, "hour")) {
    hoursArray[i].addClass("future");

  } else {
    hoursArray[i].addClass("present");

  }

}

//retrieves high scores at beginning of game, if empty, sets a default list
function getItems() {
  var dayItems = JSON.parse(localStorage.getItem("dailyItems"));
  if (dayItems !== null) {
    for (j = 0; j < hoursArray.length; j++) {
      hoursArray[j].text= (hoursArray[j]);
    }
  } else {
    var hsArray = [{
      highScore: 01,
      initials: "AAA",
    }, {
      highScore: 00,
      initials: "AAA",
    }, {
      highScore: 00,
      initials: "AAA",
    }, {
      highScore: 00,
      initials: "AAA",
    }, {
      highScore: 00,
      initials: "AAA",
    }];

    localStorage.setItem("highScores", JSON.stringify(hsArray));

    getHighScores();

  }
}