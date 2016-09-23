

$(document).ready(function(){

    $("#reviews-in img").click(function(){
        $(this).parents("#reviews-in").animate({ opacity: "hide" }, "slow");
    });

});

function deleteReview (param) {

        var this1 = param;
        $(this1).parents("#reviews-in").animate({ opacity: "hide" }, "slow");
    }

