// Agency Theme JavaScript
(function($)
{
    "use strict"; // Start of use strict
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event)
    {
        var $anchor = $(this);
        $('html, body').stop().animate(
        {
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });
    // Highlight the top nav as scrolling occurs
    $('body').scrollspy(
    {
        target: '.navbar-fixed-top',
        offset: 51
    });
    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function()
    {
        $('.navbar-toggle:visible').click();
    });
    // Offset for Main Navigation
    $('#mainNav').affix(
    {
        offset:
        {
            top: 100
        }
    })
})(jQuery); // End of use strict
///Parallax and Scroll FUnktions ///
/*var workImg = new Array;
$(document).ready(function()
{
    $('.parallax-window').parallax(
    {
        imageSrc: "img/map-image.jpg"
    });
});
// ===== Scroll to Top ==== 
$(window).scroll(function()
{
    if ($(this).scrollTop() >= 50)
    { // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200); // Fade in the arrow
    }
    else
    {
        $('#return-to-top').fadeOut(200); // Else fade out the arrow
    }
});
$('#return-to-top').click(function()
{ // When arrow is clicked
    $('body,html').animate(
    {
        scrollTop: 0 // Scroll to top of body
    }, 500);
});*/
