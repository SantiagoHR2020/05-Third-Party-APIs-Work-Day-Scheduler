$(document).ready(function () {
  // time
  $("#currentDay").text(moment().format("dddd, MMM, Do, hA"));

  // listening event to save

  $(".saveBtn").on("click", function () {
    var act = $(this).siblings(".description").val();
    console.log(act);

    var hour = $(this).parent().attr("id");
    console.log(hour);

    localStorage.setItem(hour, act);

    console.log(localStorage);
  });

  // listening event to clear

  $(".clear").on("click", function () {
    localStorage.clear();
    location.reload();
    console.log(localStorage);
  });

// looping through the attributes

  function loopHour() {
    var momentHour = moment().hours();

    console.log(momentHour);

    $(".time-block").each(function () {
      var ourHour = parseInt($(this).attr("id").split("-")[1]);
      console.log(ourHour);

      if (ourHour < momentHour) {
        $(this).children(".description").addClass("past");
      } else if (ourHour === momentHour) {
        $(this).children(".description").removeClass("past");
        $(this).children(".description").addClass("present");
      } else {
        $(this).children(".description").addClass("future");
        $(this).children(".description").removeClass("past");
        $(this).children(".description").removeClass("present");
      }
    });
  }

// geting the info from localstorage and display

  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // calling the function

  loopHour();
});
