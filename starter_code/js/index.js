$(document).ready(function () {

    //hide the class of things that start invisible - .hide
    //    $('.hide').hide(); //not needed? how is that markup already hidden?

    //when user clicks Read More,  - .readmore
    $('.readmore').click(function () {
        //  keep link from moving to the top of page when clicked
        event.preventDefault();
        //  have additional text slide down - #show-this-on-click  
        $('#show-this-on-click').slideDown();
        //  hide read more - .readmore
        $('.readmore').hide();
        //  show read less - .readlesss
        $('.readless').show(500);
    });

    //when user clicks Read Less, - .readless 
    $('.readless').click(function () {
        //  keep link from moving to the top of page when clicked
        event.preventDefault();
        //  additional text slides up - #show-this-on-click
        $('#show-this-on-click').slideUp();
        //  hide read less - .readless
        $('.readless').hide();
        //  show read more - .readmore
        $('.readmore').show(500);
    });

    //when user clicks Learn More, - .learnmore
    $('.learnmore').click(function () {
        //  keep link from moving to the top of page when clicked
        event.preventDefault();
        //  span slides down - #learnmoretext
        $('#learnmoretext').slideDown();
        //  hide Learn More link - .learnmore
        $('.learnmore').hide();
    });





    //  uncomment line below to test that this page is connected
    //    $('body p').css('color', 'red');

});