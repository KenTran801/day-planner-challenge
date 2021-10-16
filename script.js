// Create Variables
var currentDayElement = moment().format('MMMM Do YYYY');
// Created Objects - containing the time and assign a value
var calendarTimes = [
  {
    timesOnCalendar: "8:00 AM",
  },

  {
    timesOnCalendar: "9:00 AM",
  },

  {
    timesOnCalendar: "10:00 AM",
  },

  {
    timesOnCalendar: "11:00 AM",
  },

  {
    timesOnCalendar: "12:00 PM",
  },

  {
    timesOnCalendar: "1:00 PM",
  },

  {
    timesOnCalendar: "2:00 PM",
  },

  {
    timesOnCalendar: "3:00 PM",
  },

  {
    timesOnCalendar: "4:00 PM",
  },

  {
    timesOnCalendar: "5:00 PM",
  },

  {
    timesOnCalendar: "6:00 PM",
  },

  {
    timesOnCalendar: "7:00 PM",
  },

  {
    timesOnCalendar: "8:00 PM",
  },

  {
    timesOnCalendar: "9:00 PM",
  },
];

// Diaplsy current date
$("#currentDay").append(currentDayElement);

// Create for loop that generates the timeblocks (rows, hour column, text input column, and button column)
for (let i = 0; i < calendarTimes.length; i++) {
  // Create varialbles for the calendar time
  var calendarHours = calendarTimes[i].timesOnCalendar;
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
  // Create button and asign saveBtn class from CSS
  var newBtn = $("<button>");
  newBtn.addClass("saveBtn col-1 fab fa-reddit fa-3x");
  newBtn.addClass("saveBtn i:hover");




  // Append the `timeblocks`to 'class=container' in the HTML
  $(".container").append(timeBlocks);
  // Append the `newRow` to `timeblock`
  timeBlocks.append(newRow);
  // Append the new elements to the `newRow`
  newRow.append(hourSection, newBtn);
}
