$(document).ready(function() {
    // Initialisation des notifications
    $("#successNotification").jqxNotification({
        width: 250, position: "bottom-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 3000, template: "success"
    });

    $("#errorNotification").jqxNotification({
        width: 250, position: "bottom-right", opacity: 0.9,
        autoOpen: false, animationOpenDelay: 800, autoClose: true, autoCloseDelay: 3000, template: "error"
    });


    // Affichage notifications + reset form
    $('#send').click(function(){
        $('#contactForm').trigger('reset');
        $("#successText").text('Message bien envoyé !');
        $("#successNotification").jqxNotification("open");
    });

    $('#return').click(function(){
        $('#contactForm').trigger('reset');
        $("#errorText").text("Message non envoyé");
        $("#errorNotification").jqxNotification("open");
    });

    
    //Affichage lightbox
    $(".lq_img").click(function () {
        var img = $(this).attr('src');
        var imgLightbox = img.replace("lq_img--petites", "lq_img--grandes");
        $(".lq_img--lightbox").html("<img src='" + imgLightbox + "'>");
        $(".lq_img--lightbox").fadeIn("slow").css("display", "flex");

        console.log('click');
    });

    $(".lq_img--lightbox").click(function () {
        $(".lq_img--lightbox").fadeOut("fast");
    });


});