//to make a function available after the document is loaded
$(document).ready(function(){
    //set const variable 
    const test = false;

    //get times moment 
    const now = moment().format('MMMM Do YYYY, h:mm:ss a');

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
    
});
