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
    var calendarEvent = localStorage.getItem("hour" + i);
    if (calendarEvent) {
        $("#hour" + i).val(calendarEvent);
    }
}

$(".saveBtn").on('click', function () {
    var clickedHour = $(this).val();
    var textArea = $("#hour" + clickedHour).val().trim();
    if (textArea !== "") {
        localStorage.setItem("hour" + clickedHour, textArea);
    }
})
