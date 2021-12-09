$(document).ready(function() {
    $('.lq_link-more').click(function() {
        var value =  $(this).attr("name");
        
        $('#productValue').val(value);
    })

    $('#productField').removeClass("d-none");
});