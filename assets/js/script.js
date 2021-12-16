$(document).ready(function() {

    /*lien entre produits et page contact*/
    $('.lq_link-more').click(function() {
        var value = $(this).attr("name");
        $('#productValue').val(value);

        /*Affiche le champ produit dans le formulaire de contact*/
        $('#productField').removeClass("d-none");
    });


    // Initialisation des notifications
    $("#successNotification").jqxNotification({
        width: 250,
        position: "bottom-right",
        opacity: 0.9,
        autoOpen: false,
        animationOpenDelay: 800,
        autoClose: true,
        autoCloseDelay: 3000,
        template: "success"
    });

    $("#errorNotification").jqxNotification({
        width: 250,
        position: "bottom-right",
        opacity: 0.9,
        autoOpen: false,
        animationOpenDelay: 800,
        autoClose: true,
        autoCloseDelay: 3000,
        template: "error"
    });

    /*Appel des notifications + réinitialisation du formulaire*/
    $('#send').click(function() {
        $('#contactForm').trigger('reset');
        $("#successText").text('Message bien envoyé !');
        $("#successNotification").jqxNotification("open");
    });

    $('#return').click(function() {
        $('#contactForm').trigger('reset');
        $("#errorText").text("Message non envoyé");
        $("#errorNotification").jqxNotification("open");
    });

    /*dark mode*/
    $('.ls_checkbox').on('change', function() {
        var is_it_checked = $(this).prop("checked"); //check the checkbox is checked or not
        if (is_it_checked == true) {
            $('.lq_product-details, .navbar, .form-control, .modal-content').css('background-color', '#3a3a3a');
            $('.navbar a, .navbar h2, #contact2 h2, #ls_contact-modal h2').css('color', 'white');
            $('#quiSommesNous, #quiSommesNous h2, #quiSommesNous h3').css('color', 'white');
            $('#boutique h2, #boutique, #boutique a').css('color', 'white');
            $('.td_home-slider__slide--1,.td_home-slider__slide--2,.td_home-slider__slide--3, #contact2 img').css('filter', 'grayscale(1)')
            $(document.body, '.navbar').css('background-color', 'var(--noir)');
        } else {
            $('.lq_product-details, .navbar, .form-control, .modal-content').removeAttr('style');
            $('.navbar').removeAttr('style');
            $('.navbar a, .navbar h2, #contact2 h2, #ls_contact-modal h2').removeAttr('style');
            $('#quiSommesNous, #quiSommesNous h2, #quiSommesNous h3').removeAttr('style');
            $('#boutique h2, #boutique, #boutique a').removeAttr('style');
            $('.td_home-slider__slide--1,.td_home-slider__slide--2,.td_home-slider__slide--3').removeAttr('style');
            $(document.body).removeAttr('style');
        };
    });

    $('#validInscription').click(function() {
        $("#successText").text('Inscription effectuée');
        $("#successNotification").jqxNotification("open");
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