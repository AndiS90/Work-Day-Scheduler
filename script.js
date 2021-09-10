var nineAmEl = $('#09_AM');
var tenAmEl = $('#10_AM');
var elevenAmEl = $('#11_AM');
var twelvePmEl= $('#12_PM');
var onePmEl = $('#01_PM');
var twoPmEl = $('#02_PM');
var threePmEl= $('#03_PM');
var fourPmEl= $('#04_PM');
var fivePmEl= $('#05_PM');

hoursArray = [nineAmEl, tenAmEl,elevenAmEl, twelvePmEl, onePmEl, twoPmEl, threePmEl, fourPmEl, fivePmEl];
var rightNow= moment("2021-09-10 13:00:00");
var timeDisplayEl = $('#currentDay');


function displayTime() {
    var today = rightNow.format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(today);
  }

  setInterval(displayTime, 1000);


for (i=0; i<hoursArray.length; i++){
var textArea = hoursArray[i];
var hour = moment( textArea.id, 'hh_A');

  if (rightNow.isAfter(hour, "hour")){
    hoursArray[i].addClass("past");

  } else if (rightNow.isBefore(hour, "hour")){
    hoursArray[i].addClass("future");

  } else {
    hoursArray[i].addClass("present");

  }
  

}