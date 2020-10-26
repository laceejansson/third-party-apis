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
    $("#currentTime").val(moment().format())

    $(`#${hours}`).addClass("present");

    $("#9").val(localStorage.getItem("9"));
    if (hours >9) {
        $(`#9`).addClass("past");
    } 
    $("#10").val(localStorage.getItem("10"));
    if (hours >10) {
        $(`#10`).addClass("past");
    } else if (hours < 10) {
        $(`#10`).addClass("future");
    }
    $("#11").val(localStorage.getItem("11"));
    if (hours > 11) {
        $("#11").addClass("past");
    } else if (hours < 11) {
        $("#11").addClass("future");
    }
    $("#12").val(localStorage.getItem("12"));
    if (hours > 12) {
        $("#12").addClass("past");
    } else if (hours < 12) {
        $("#12").addClass("future");
    }
    $("#13").val(localStorage.getItem("13"));
    if (hours > 13) {
        $("#13").addClass("past");
    } else if (hours < 13) {
        $("#13").addClass("future");
    }
    $("#14").val(localStorage.getItem("14"));
    if (hours > 14) {
        $("#14").addClass("past");
    } else if (hours < 14) {
        $("#14").addClass("future");
    }
    $("#15").val(localStorage.getItem("15"));
    if (hours > 15) {
        $("#15").addClass("past");
    } else if (hours < 15) {
        $("#15").addClass("future");
    }
    $("#16").val(localStorage.getItem("16"));
    if (hours > 16) {
        $("#16").addClass("past");
    } else if (hours < 16) {
        $("#16").addClass("future");
    }
    $("#17").val(localStorage.getItem("17"));
    if (hours > 17) {
        $("#17").addClass("past");
    } else if (hours < 17) {
        $("#17").addClass("future");
    }
    $("#18").val(localStorage.getItem("18"));
    if (hours > 18) {
        $("#18").addClass("past");
    } else if (hours < 18) {
        $("#18").addClass("future");
    }

    
    
    $(".saveBtn").click(function(){
        var id = $(this).parent().find('input').attr('id')
        var value = $(this).parent().find('input').val()
        localStorage.setItem(id,value)  
    });

  });

console.log(moment().format())