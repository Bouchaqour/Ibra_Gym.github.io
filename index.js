var main = function(){


$("#row_two div").attr("class", "class1");
var counter = 2;
    int = setInterval(function(){
    $("#row_two div").attr("class", "class" + counter);
    if (counter === 3){
        counter = 1;
    } else {
        counter++;
    }
}, 5000);


   












//for the tabs
    $('.tabs .tab-links a').click(function(e){
        var currentAttrValue = $(this).attr('href');

        // Show/Hide Tabs
        $('.tabs ' + currentAttrValue).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });



};

$(document).ready(main);