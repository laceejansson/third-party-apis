function currentHour() {
    return new Date().getHours()
}
var hours = currentHour() 
console.log(hours)

function currentTime() {
    return new Date()
}

var now = currentTime() 

$(document).ready(function(){
    $(`#${hours}`).addClass("present");
    if (hours >9) {
        $(`#9`).addClass("past");
    } 

    if (hours >10) {
        $(`#10`).addClass("past");
    } else if (hours < 10) {
        $(`#10`).addClass("future");
    }

    if (hours > 11) {
        $("#11").addClass("past");
    } else if (hours < 11) {
        $("#11").addClass("future");
    }

    if (hours > 12) {
        $("#12").addClass("past");
    } else if (hours < 12) {
        $("#12").addClass("future");
    }

    if (hours > 13) {
        $("#13").addClass("past");
    } else if (hours < 13) {
        $("#13").addClass("future");
    }

    if (hours > 14) {
        $("#14").addClass("past");
    } else if (hours < 14) {
        $("#14").addClass("future");
    }

    if (hours > 15) {
        $("#15").addClass("past");
    } else if (hours < 15) {
        $("#15").addClass("future");
    }

    if (hours > 16) {
        $("#16").addClass("past");
    } else if (hours < 16) {
        $("#16").addClass("future");
    }

    if (hours > 17) {
        $("#17").addClass("past");
    } else if (hours < 17) {
        $("#17").addClass("future");
    }

    if (hours > 18) {
        $("#18").addClass("past");
    } else if (hours < 18) {
        $("#18").addClass("future");
    }
    
  });

