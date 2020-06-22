//to make a function available after the document is loaded
$(document).ready(function () {
    //set const variable 
    const test = false;

    //get times moment 
    const now = moment().format('MMMM Do YYYY || h:mm:ss a');

    //declearing for test in non-standard hrs
    let nowHour24 = moment().format('H');
    let nowHour12 = moment().format('h');

    //setting time for testing after hours
    if (test) {
        nowHour24 = 13;
        nowHour12 = 1;
    }
    let $dateHeading = $('#currentDay');
    console.log($dateHeading);
    $dateHeading.text(now);

    //store a key/value in localStorage using JSON.parse
    let storedValues = JSON.parse(localStorage.getItem("storedPlan"));
    console.log(storedValues);

    //If plans were retrive from localStore, update the plan array key/value in it.
    if (storedValues !== null) {
        planTextArr = storedValues;
    } else {
        //Helps To remind user that party is important this will show on first time when the app is loaded in the browser
        planTextArr = new Array(10);
        planTextArr[5] = "Birth Day Party";
        console.log("full array of planed text", planTextArr);
    }

    //Set variable referencing planner element 
    let $plannerDiv = $('#container');
    //clear existing elements
    $plannerDiv.empty();

    console.log("current time", nowHour24);

    //Build calendar using row to fix set of hours
    for (let hour = 1; hour <= 24; hour++) {
        // Index for array to use offset from hour
        let index = hour - 10;

        //Building row componens 
        let $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index', hour);

        //

    }
});
