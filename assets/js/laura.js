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




    $('#send').click(function(){
        $('#contactForm').trigger('reset');
        $("#successText").text('Message bien envoyé !');
        $("#successNotification").jqxNotification("open");
    })

    $('#return').click(function(){
        $('#contactForm').trigger('reset');
        $("#errorText").text("Message non envoyé");
        $("#errorNotification").jqxNotification("open");
    })


});