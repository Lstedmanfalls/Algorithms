// Display a ticking clock with the current time (12:59:01 PM with seconds ticking) 

var tickingClock = setInterval(function(){
    var now = new Date();    
    var date = now.toLocaleTimeString('en-US')
    document.getElementById("app").innerHTML = "The time is: " + date
})