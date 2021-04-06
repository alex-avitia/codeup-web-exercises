/* removed code from previous exercises
$(document).ready(function() {
    alert( 'The DOM has finished loading!' );
});
*/

/* Pt I Selectors

var headsUp = $('#main-header').html();
alert(headsUp);

 */

/* Pt II Selectors

$('.codeup').css('border', '1px solid red');

 */

/* Pt III Selectors

$('li').css('font-size', '20px');

$('h1, p, li').css('background-color', 'yellow');

 */

/* JQuery Mouse Events

 */

$('h1').click(function() {
    $('h1').css('background-color', 'cornflowerblue');
});

$('p').dblclick(function(){
    $('p').css('font-size', '18px');
});

$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    })
