// Create Variables
var currentDayElement = moment().format('MMMM Do YYYY');
// Created Objects - containing the time and assign a value
var calendlyTimes = [
    {
      normalTime: "8:00 AM",
    },
  
    {
      normalTime: "9:00 AM",
    },
  
    {
      normalTime: "10:00 AM",
    },
  
    {
      normalTime: "11:00 AM",
    },
  
    {
      normalTime: "12:00 PM",

    },
  
    {
      normalTime: "1:00 PM",
    },
  
    {
      normalTime: "2:00 PM",
    },
  
    {
      normalTime: "3:00 PM",
    },
  
    {
      normalTime: "4:00 PM",
    },
  
    {
      normalTime: "5:00 PM",
    },
  
    {
      normalTime: "6:00 PM",
    },
  
    {
      normalTime: "7:00 PM",
    },
  
    {
      normalTime: "8:00 PM",
    },
  
    {
      normalTime: "9:00 PM",
    },
  ];

// Diaplsy current date
$("#currentDay").append(currentDayElement);

// Create for loop that generates the timeblocks (rows, hour column, text input column, and button column)

