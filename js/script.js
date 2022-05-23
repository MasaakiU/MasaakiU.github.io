$(window).on('load resize', function() {
    var height01 = $('#nav01').height();
    var height02 = $('#nav02').height();
    $('body').css('padding-top', height01 + height02);
});