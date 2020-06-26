
# Homework-5, Day-Planner: 
* by Ram Sah

# Summary:
* HTML and CSS and Javascript documents create a day planner  with an twelve-hours work day (6:00 am to 6:00pm)
* The task manager aspect saves entries to local storage
* This project emphasizes the use of using Javascript to save and retrieve data from local storage
* This project utilizes the use of moment.js for time calculation and formatting conversion

# This project has the following features:
* A header with local time that updates live Seven Input Entries
* A Save button that saves items to local storage
* Attribute changes for hour by hour time tracking
* Gray is past the current hour
* Yellow is on the current hour
* LightGreen is before the current hour

# Psuedo code:
### GIVEN I am using a daily planner to create a schedule
* WHEN I open the planner
THEN the current day is displayed at the top of the calendar
* WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
* WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
* WHEN I click into a timeblock
THEN I can enter an event
* WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
* WHEN I refresh the page
THEN the saved events persist
### ----------
Find out of Moment.js needs further installation
Start with Document onload
Look up Javscript Calendar, write steps down and find matching Jquery methods
* Needs to compare each hour to current time, and determine if it is Current time is always going to be more than start time. 
* Current time is always going to be less than end time 
* Difference between the two 
* For loop for starting time, it would only be able to loop up to the ending time, then what? 

# How can we use moment duration to compare time?

* This project has script features of:
* Moment.js for local time, current time, and time conversion for individual hours
* Appended text to HTML for hour time
* If, if/else statement to compare time with the current time
* Appended attributes for color current time
* An event listener for the save buttons to save to local storage
* This project features responsive design using a Bootstrap layout Has responsive layout for:
* Small devices (landscape phones, 576px and up)  
* Large devices (desktops, 992px and up) 

* To Execute File: Open in browser

# Features:
* Index.html
* Styles.css
* script.js
# Demo
Contains 12 inputs for an 12-hour work day
Contains styling for changing attributes and buttons
One Javascript Page 
* Contains:  Variables, including arrays and time conversion 
* Event listeners 
* if/else if statements 
* For Loops 
* Functions 
* Local Storage set and get

Code Validation:
* These use W3C Code Validators for HTML and CSS
* esprima Syntax Validator 
   

