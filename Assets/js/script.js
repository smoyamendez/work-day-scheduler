// Adds current day at top of the calendar
$("#currentDay").text(moment().format("dddd, MMM Do"));

// Color codes to indicate past/present/future
var currentHour = moment().hour();

for (var i = 9; i < 18; i++) {
    if (currentHour > i) {
        $("#hour" + i).addClass("past");
    } else if (parseInt(currentHour) === i) {
        $("#hour" + i).addClass("present");
    } else { 
        $("#hour" + i).addClass("future");
    }
}
// Save to local storage
calendarEvents = [];


$(".saveBtn").click(function() {
    userInput = $("textarea").val();
    key = $('td[id^="hour"]');

    console.log(key);
}); 
  
