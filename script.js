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

