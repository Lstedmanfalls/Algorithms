function leap_year(year){
    if ((year % 4 == 0) && (year % 100 !==0) || (year % 400 == 0)){
        console.log("It is a leap year")
    }
    else{
        console.log("It is not a leap year")
    }
}
leap_year(4)
leap_year(100)
leap_year(400)
leap_year(1995)