// Given a string of time in -hour AM/PM format, convert it to military (24-hour) time.
// input e.g., = "12:00:00PM"

//First method with removing the AM/PM
const timeConversion = (s) => {
    let [hours, minutes, seconds] = s.split(":")
        if (hours === "12"){
            hours = "00";
        }
        if (seconds[2] === "P"){
        hours = parseInt(hours, 10) + 12 //parseInt is to int, the 10 means base 10
        }
        seconds = seconds.replace("P","").replace("M", "").replace("A", "") //To remove the PM and AM
    return hours.toString() +":" + minutes +":" + seconds
}
console.log(timeConversion("12:40:22AM"))

// Another way
const timeConversion2 = (s) => {
    let time = s.split(":");
    let seconds = time[2].split("")
    if (time[0] === "12"){
        time[0] = "00";
    }
    if (seconds[2] === "P"){
    time[0] = parseInt(time[0], 10) + 12
    }
    const string = time.toString()
    const find = ","
    const re = new RegExp(find, 'g'); 
    converted = string.replace(re, ':');
    return converted
}
console.log(timeConversion2("12:40:22AM"))
console.log(timeConversion2("01:40:22AM"))
console.log(timeConversion2("12:40:22PM"))
console.log(timeConversion2("11:40:22PM"))