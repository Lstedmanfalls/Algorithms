// Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// input e.g., = "12:00:00PM"

function timeConversion(s) {
    let [hours, minutes, seconds] = s.split(":")
        if (hours == "12"){
            hours = "00";
        }
        if (seconds[2] == "P"){
        hours = parseInt(hours, 10) + 12
        }
        seconds = seconds.replace("P","").replace("M", "").replace("A", "")
    return hours.toString() +":" + minutes +":" +seconds
}

console.log(timeConversion("12:40:22AM"))