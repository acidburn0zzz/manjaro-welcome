$(document).ready(function() {
    var $nav = $('#navigation');
    $nav.css('left', -60);
    $nav.show();
    $nav.delay(250).animate({ left: 0 }, 500);
});