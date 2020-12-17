$(function(){

var save_btns= $("saveBtn");


$(".saveBtn").on("click", function(){


    var test = this.previousElementSibling.value;       //stores value in text area upon clicking the save
    console.log(test);


})




});        // makes sure that html fully loads before running javascript
            // this ensures javascript doesn't try to add/change something to an element that doesn't yet exist