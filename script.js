var timeDisplayEl = $('#currentDay');

function displayTime() {
    var today = moment().format('MMM DD, YYYY [at] hh:mm a');
    timeDisplayEl.text(today);
  }

  setInterval(displayTime, 1000);

