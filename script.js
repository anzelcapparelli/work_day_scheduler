$(function () {

    $("#currentDay").text(moment().format("dddd, MMM Do"))      //current day

    var hours_array = moment($(".hour").text(), "hh a");

    // for (var i = 0; i < hours_array.length; i++){

    //     hours_array[i] = parseInt(hours_array[i]);

    // } 

    console.log(hours_array);

    moment()

    var hours = parseInt($(".hour").text());
    console.log(hours);
    //adding classes past, present, and future
    //can get time with $(".hour").value
    //forEach function, compare with actual time
    //if actual is later, addClass("past"), removeClass("present future")
    //if equals, addClass("present"), removeClass("past future")
    //if actual is earlier, addClass("future"), removeClass("past present")




    $(".saveBtn").on("click", function () {


        var test = this.previousElementSibling.value;       //stores value in text area upon clicking the save
        console.log(test);


    })




});        // makes sure that html fully loads before running javascript
            // this ensures javascript doesn't try to add/change something to an element that doesn't yet exist