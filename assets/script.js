$(document).ready(function(){
    $("#currentDay").text(moment().format("dddd, MMM, Do, hA"))

$(".saveBtn").on("click", function(){
    var act = $(this).siblings(".description").val()
    console.log(act);
    
    var hour = $(this).parent().attr("id");
    console.log(hour);

    localStorage.setItem(hour, act);

    console.log(localStorage)
})

$(".clear").on("click", function(){
    localStorage.clear();
    location.reload();
    console.log(localStorage);
})

function loopHour() {
    var momentHour = moment().hours()

    console.log(momentHour)

    $(".time-block").each(function(){
        var ourHour = parseInt($(this).attr("id").split("-")[1])
        console.log(ourHour)

        if(ourHour<momentHour) {
            $(this).children(".description").addClass("past");
        }else if(ourHour === momentHour){
            $(this).children(".description").removeClass("past");
            $(this).children(".description").addClass("present");
        }else{
            $(this).children(".description").addClass("future")
            $(this).children(".description").removeClass("past");
            $(this).children(".description").removeClass("present");
        }

    })
}

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-9"))
$("#hour-11 .description").val(localStorage.getItem("hour-9"))
$("#hour-12 .description").val(localStorage.getItem("hour-9"))
loopHour()
})