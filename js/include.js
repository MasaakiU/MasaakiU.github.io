function header() {
    $.ajax({
        url: '/contents/header.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html) {
            document.write(html);
        },
        error: function() {
            // alert('Ajax error!');
        }
    })
}

function footer() {
    $.ajax({
        url: '/contents/footer.html',
        cache: false,
        async: false,
        dataType: 'html',
        success: function(html) {
            document.write(html);
        },
        error: function() {
            // alert('Ajax error!');
        }
    })
}