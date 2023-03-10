$(document).ready(function () {
  let clicked = "",
    display = "",
    answer = "?";

  $(".btn").click(function () {
    clicked = $(this).attr("value");

    // when equals is clicked, evaluate the string and reset
    if (clicked === "=") {
      answer = eval(display);
      console.log("equals: " + eval(display));
      if (!eval(display)) {
        $("#evaluate").html("Please check your equation: " + display);
      }
      if (Number.isInteger(answer) === false) {
        display = answer.toFixed(2);
      } else display = answer;
      $("#evaluate").html(display);
    }

    // deals with numbers input
    if (!isNaN(clicked)) {
      // take input value and add to eval string
      display += clicked;
      $("#evaluate").html(display);
      console.log("clicked: " + clicked + ", display: " + display);
    }

    // deals with operations inputs... except when it doesn't.
    if (isNaN(clicked)) {
      if (
        display != "" &&
        clicked != "Oops" &&
        clicked != "nvm" &&
        clicked != "." &&
        clicked != "="
      ) {
        display += clicked;
        $("#evaluate").html(display);
        console.log("clicked: " + clicked + ", display: " + display);
      }

      // oops function
      else if (clicked === "Oops") {
        display = display.substring(0, display.length - 1);
        $("#evaluate").html(display);
      }

      // nvm function
      else if (clicked === "nvm") {
        display = "";
        $("#evaluate").html(display);
      }

      // only one decimal in succession
      else if (clicked === ".") {
        var last = display.slice(-1);
        var lastTwo = display.slice(-2);
        console.log(last);
        // if the display is empty
        if (display === "") {
          display += "0.";
          $("#evaluate").html(display);
        } else if (lastTwo === "0.") {
          console.log("last two: " + lastTwo);
        }
        // if last char of display is not a number
        else if (isNaN(last)) {
          console.log("last not number: " + last);
          display += "0.";
          $("#evaluate").html(display);
        }
        // if last char of display is a number
        else if (!isNaN(last) && last != "") {
          console.log(last + " is num");
          display += ".";
          $("#evaluate").html(display);
        }
      }
    }

    // max input chars
    if (display.length > 14) {
      display = "Err: cat on keyboard";
      $("#evaluate").html(display);
    }
  });
});

