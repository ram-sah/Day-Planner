//to make a function available after the document is loaded
$(document).ready(function () {
    //set const variable 
    const test = false;

    //get times moment 
    const now = moment().format('MMMM Do YYYY || h:mm a');

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
        planTextArr = new Array(7);
        planTextArr[5] = "Birth Day Party";
        console.log("full array of planed text", planTextArr);
    }

    //Set variable referencing planner element 
    let $plannerDiv = $('#subContainer');
    //clear existing elements
    $plannerDiv.empty();

    console.log("current time", nowHour12);

    //Build calendar using row to fix set of hours
    for (let hour = 1; hour <= 12; hour++) {
        // Index for array to use offset from hour
        let index = hour - 7;

        //Building new row class 
        let $rowDiv = $('<div>');
        $rowDiv.addClass('row');
        $rowDiv.addClass('plannerRow');
        $rowDiv.attr('hour-index', hour);

        //create time box portion of row
        let $col2TimeDiv = $('<div>');
        $col2TimeDiv.addClass('col-md-2');

        //create timebox element (contain time)
        const $timeBoxSpn = $('<span>');

        //we use this to get vallue
        $timeBoxSpn.attr('class', 'time-block');

        //format hours for display
        let displayHour = 0;
        let ampm = "";
        if (hour > 12) {
            displayHour = hour -12;
            ampm = "pm";            
        } else {
            displayHour = hour;
            ampm = "am";
        }
        //Display time on timebox
        $timeBoxSpn.text(`${displayHour} ${ampm}`);
        
        //add col on timeBox 
        $rowDiv.append($col2TimeDiv);
        $col2TimeDiv.append($timeBoxSpn);

        //start building input portion of row
        let $dailyPlanSpn = $('<input>');
        $dailyPlanSpn.attr('id', `input-${index}`);
        $dailyPlanSpn.attr('hour-index', index);
        $dailyPlanSpn.attr('type', 'text');
        $dailyPlanSpn.attr('class', 'dailyPlan');

        //access index from data array for hour
        $dailyPlanSpn.val(planTextArr[index]);

        //create col to control control the width
        let $col9IptDiv = $('<div>');
        $col9IptDiv.addClass('col-md-9');

        //add col width and row component 
        $rowDiv.append($col9IptDiv);
        $col9IptDiv.append($dailyPlanSpn);

        // start building save portion of row
        let $col1SaveDiv = $('<div>');
        $col1SaveDiv.addClass('col-md-1');
        let $saveBtn = $('<div>');
        $saveBtn.attr('id', `saveid- ${index}`);
        $saveBtn.attr('save-id', index);
        $saveBtn.addClass("saveBtn");

        var saveIcon = $("<i class='material-icons'>save</i>");
        $saveBtn.append(saveIcon);

        //append col width and row component to row
        $rowDiv.append($col1SaveDiv);
        $col1SaveDiv.append($saveBtn);

        //set row color based on time
        updateRowColor($rowDiv, hour);

        //add row to planner container  
        $plannerDiv.append($rowDiv);
    };

    //use function to update row color
    function updateRowColor ($hourRow, hour) {
       
        if (hour < nowHour24) {
            
            $hourRow.css("background-color", "lightgrey")
        } else if (hour > nowHour24) {
           $hourRow.css("background-color", "lightgreen")
        } else {
            $hourRow.css("background-color","yellow" )
        }
    };



});
