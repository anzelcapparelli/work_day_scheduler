$(function () {



    $("textarea").empty();
    $("textarea").each(function () {
        var key_sto = (parseInt($(this).parent().text()))
        console.log(key_sto);
        if (localStorage.getItem(key_sto) !== "") {
            var json_todo = localStorage.getItem((key_sto));
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

        var key_sto = (parseInt($(this).parent().text()));

        var str_todo = JSON.stringify(todo);

        localStorage.setItem(key_sto, str_todo);
        // storage.setItem(keyName, keyValue);


    })
    

});        // makes sure that html fully loads before running javascript
           // this ensures javascript doesn't try to add/change something to an element that doesn't yet exist