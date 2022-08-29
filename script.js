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
    // console.log("currentHour", currentHour);
    $(".time-block").each(function(){ //selects the id of each hour block and compares against current hour
        var blockHour = parseInt($(this).attr("id"));
        var hourCol = $(this).attr("id");
        var ampm = hourCol.slice(-2);
        if (ampm==="pm" && blockHour!=12){  //makes the hour blocks into military time
            blockHour+=12;
        }
        // console.log("blockHour", blockHour);
        // console.log("hourCol", hourCol);
        // console.log(this);
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

$(".btn").on("click", function() {
    var textentered = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // console.log(test);
    // console.log(textentered);

    localStorage.setItem(time, JSON.stringify(textentered));
})

    
// })

hourStatus();
setInterval(displayTime, 1000);



})