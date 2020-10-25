function currentHour() {
    return new Date().getHours()
}
var hours = currentHour() 
console.log(hours)

function currentTime() {
    return new Date()
}

var now = currentTime() 
console.log(now)

$("#testing").hide();