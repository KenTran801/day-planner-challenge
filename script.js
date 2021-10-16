// Create Variables
// Current day variable
var currentDayElement = moment().format('MMMM Do YYYY');
// Current time variable
var currentTime = Number(moment().format('HH'));
// Created Objects - containing the time and assign a value
var calendarTimes = [
  {
    timesOnCalendar: "8:00 AM",
    value: 8,
  },

  {
    timesOnCalendar: "9:00 AM",
    value: 9,
  },

  {
    timesOnCalendar: "10:00 AM",
    value: 10,
  },

  {
    timesOnCalendar: "11:00 AM",
    value: 11,
  },

  {
    timesOnCalendar: "12:00 PM",
    value: 12,
  },

  {
    timesOnCalendar: "1:00 PM",
    value: 13,
  },

  {
    timesOnCalendar: "2:00 PM",
    value: 14,
  },

  {
    timesOnCalendar: "3:00 PM",
    value: 15,
  },

  {
    timesOnCalendar: "4:00 PM",
    value: 16,
  },

  {
    timesOnCalendar: "5:00 PM",
    value: 17,
  },

  {
    timesOnCalendar: "6:00 PM",
    value: 18,
  },

  {
    timesOnCalendar: "7:00 PM",
    value: 19,
  },

  {
    timesOnCalendar: "8:00 PM",
    value: 20,
  },

  {
    timesOnCalendar: "9:00 PM",
    value: 21,
  },
];
// Diaplsy current date
$("#currentDay").append(currentDayElement);
// Create for loop that generates the timeblocks (rows, hour column, text input column, and button column)
for (let i = 0; i < calendarTimes.length; i++) {
  // Create varialble for the calendar time
  var calendarHours = calendarTimes[i].timesOnCalendar;
  // Create variable to assign a value to the hour/time
  var timeValue = calendarTimes[i].value;
  // create time block div and assign class from CSS
  var timeBlocks = $("<div>");
  timeBlocks.addClass("time-block");
  // Create new rows and asign class from CSS
  var newRow = $("<div>");
  newRow.addClass("row");
  // Creating hour section and assign class from CSS
  var hourSection = $("<div>");
  hourSection.addClass("hour col-2");
  hourSection.text(calendarHours);
  // Create button and assign saveBtn class from CSS
  var newBtn = $("<button>");
  newBtn.addClass("saveBtn col-1 fab fa-reddit fa-3x");
  newBtn.addClass("saveBtn i:hover");
  newBtn.attr("data-hour", timeValue)
  // Create input area and assign
  var textInput = $("<input>");
  textInput.addClass("textarea col-9");
  // Adding ID to textInput
  textInput.attr("id", timeValue);
  // Pull in data from local storage to save users inpits
  textInput.val(JSON.parse(localStorage.getItem(timeValue)));
  // populate the row color provided from CSS classes (past, present, future). 
  if (timeValue < currentTime) {
    textInput.addClass("past");
  } else if (timeValue === currentTime) {
    textInput.addClass("present");
  } else if (timeValue > currentTime) {
    textInput.addClass("future");
  };
  // Click event to store user input
  newBtn.on("click", function (event) {
    event.preventDefault();
    // Assistance from TA, was able to create code to store user input in local storage
    var eventInput = $("#"+$(this).attr("data-hour")).val();
    localStorage.setItem($(this).attr("data-hour"), JSON.stringify(eventInput));
  });
  // Append the `timeblocks`to 'class=container' in the HTML
  $(".container").append(timeBlocks);
  // Append the `newRow` to `timeblock`
  timeBlocks.append(newRow);
  // Append the new elements to the `newRow`
  newRow.append(hourSection, textInput, newBtn);
}
