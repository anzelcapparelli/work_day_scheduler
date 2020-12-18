$(function () {

    var val_count = 9;       //the starting hour on the planner!
    var hourVal;


    $("#currentDay").text(moment().format("dddd, MMM Do"))      //current day


    var hour_array = $(".time-block").toArray();
    // console.log(hour_array);


    //this assigns a value to each time-block div! easier to grab & compare with moment(), 
    //then add/remove classes based on difference


    //need to target each row
    $(".time-block").each(function (index) {

        var id_val = $(this).text();
        var id_num = parseInt(id_val);

        if (id_num < 9) {
            id_num += 12;
        }

        var hour_dif = id_num - moment().format("H");

        if (hour_dif < 0) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        if (hour_dif = 0) {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
        if (hour_dif > 0) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        }



    });


    //=====================================================================================================



    //=====================================================================================================


    $(".saveBtn").on("click", function () {


        //stores value in text area upon clicking the save
        var todo = this.previousElementSibling.value;
        console.log(todo);

        var str_todo = JSON.stringify(todo);
        // storage.setItem(keyName, keyValue);
        console.log(this);

    })
    //^^ need to get time associated too! that way, can, upon retrieval, need to assign to right place!
    // can get parent of, then do       can add attr "data-val" to it, which can use to grab later! 



});        // makes sure that html fully loads before running javascript
            // this ensures javascript doesn't try to add/change something to an element that doesn't yet exist