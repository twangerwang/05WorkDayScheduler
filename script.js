$(document).ready(function(){
var displayTimeEl = $("#currentDay");
var saveButton = $(".btn");
//displays current month day year hour minute seconds
function displayTime() {
    var now = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
    displayTimeEl.text(now);
}
//determines if the hour is past, present, or future
function hourStatus() {
    var currentHour = moment().hour(); //extracts the current hour from the time
    $(".time-block").each(function(){ //selects the id of each hour block and compares against current hour
        var blockHour = parseInt($(this).attr("id"));
        var hourCol = $(this).attr("id");
        var ampm = hourCol.slice(-2);
        if (ampm==="pm" && blockHour!=12){  //makes the hour blocks into military time
            blockHour+=12;
        }
        if (currentHour>blockHour){
            $(this).addClass("past");
        } else {
            if (currentHour===blockHour){
                $(this).addClass("present");
            }else{
                $(this).addClass("future");
            }
        }
    })
}
//saves text entered into local storage on click with time as key
$(".btn").on("click", function() {
    var textentered = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, textentered);    
})

hourStatus();
setInterval(displayTime, 1000);
//retrieve data stored in local storage back on schedule upon refresh of webpage 
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));
})