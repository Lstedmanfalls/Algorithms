// Display a ticking clock with the current time (12:59:01 PM with seconds ticking) 

const tickingClock = setInterval(function() {
    let now = new Date();    
    const date = now.toLocaleTimeString('en-US')
    document.getElementById("app").innerHTML = "The time is: " + date
})