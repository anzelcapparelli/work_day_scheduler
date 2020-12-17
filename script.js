$(function () {

    var val_count = 9;

    $("#currentDay").text(moment().format("dddd, MMM Do"))      //current day


    // for (var i = 0; i < $(".time-block").length; i++) {

    //     var hour_val = val_count + i;

    //     // console.log(i);
    //     // console.log(hour_val);
    //     // var test = parseInt($(".hour")[i]);
    //     // console.log(test);

    //     //     $(".time-block").attr("value", hour_val);
    //         console.log($(".time-block").attr("value", hour_val));
    // }

    // }

    var hour_array = $(".time-block").toArray();
    console.log(hour_array);

    for (var i = 0; i < $(".time-block").length; i++)

    // hour_array.forEach(function (item, index) {

    //     $("this").attr("value", val_count + index)

    // });

    //=====================================================================================================
    //was getting too complex! MAKE WORK FIRST, THEN CAN GET FANCY!


    //  = moment($(".hour").text(), "hh a");       //make into for loop!

    //     var hours_array= $(".hour").text()
    //     console.log(hours_array);

    // for (var i=0; i< hours_array.length; i++){      //could turn into for each (ref code_quiz!)



    //     console.log(hours_array[i]);

    // moment(hours_array[i], "hh a")

    // var diff = hours_array[i] - moment();
    //     // console.log(diff);

    // }

    //     console.log(moment());



    // for (var i = 0; i < hours_array.length; i++){

    //     hours_array[i] = parseInt(hours_array[i]);

    // } 

    // console.log(hours_array);

    // moment()

    // var hours = parseInt($(".hour").text());     //dont think I want; found better with moment
    // console.log(hours);


    //=====================================================================================================


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