$(function () {

    var key;

    $("textarea").empty();
    $("textarea").each(function () {
        if (localStorage.getItem(key) !== "") {
            var json_todo = localStorage.getItem((key));
            var ret_todo = JSON.parse(json_todo);
            $(this).text(ret_todo);
        }
    })
            //need to fix!  figure out what the "this" from key refers to!

    $("#currentDay").text(moment().format("dddd, MMM Do"))      //current day


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

        var key = (parseInt($(this).parent().text()));

        var str_todo = JSON.stringify(todo);

        localStorage.setItem(key, str_todo);
        // storage.setItem(keyName, keyValue);


    })
    //^^ need to get time associated too! that way, can, upon retrieval, need to assign to right place!
    // can get parent of, then do       can add attr "data-val" to it, which can use to grab later! 



});        // makes sure that html fully loads before running javascript
            // this ensures javascript doesn't try to add/change something to an element that doesn't yet exist