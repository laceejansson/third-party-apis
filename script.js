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
    $(`#${hours}`).css("background-color", "red")();
  });