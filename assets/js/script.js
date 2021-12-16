$(document).ready(function () {
    var home = $("#home");
    var about = $("#quiSommesNous");
    var boutique = $("#boutique");
    var contact = $("#contact");

    var page_boutique_1 = $("#lq_product1");
    var page_boutique_2 = $("#lq_product2");
    var page_boutique_3 = $("#lq_product3");


    /**
     * Active home slider
     */
    addHomeSliderNav();

    /**
     * Move the slider to the desired slide.
     * Change the color of the current link in the slider navigation bar.
     * Remove the class "td_home-slider__slide--current" from the old current slide and add it to the new one.
     * Remove the class "td_home-slider__nav__link--current" from the old current link in the slider navigation bar and add it to the new one.
     */
    $(document).on('click', 'li.td_home-slider__nav__link', function () {
        let home_slider_slide_current = $('.td_home-slider__slide--current');
        let home_slider_nav_link_current = $('.td_home-slider__nav__link--current');
        let this_home_slider_link_data = $(this).data('home-slider__link');
        let new_home_slider_slide_current = $('[data-home-slider_slide="' + this_home_slider_link_data + '"]');
        let home_slider_width_move = (this_home_slider_link_data - 1) * 100;

        $('main').animate({ 'right': home_slider_width_move + '%' }, 1200);
        home_slider_slide_current.removeClass('td_home-slider__slide--current');
        home_slider_nav_link_current.removeClass('td_home-slider__nav__link--current');
        new_home_slider_slide_current.addClass('td_home-slider__slide--current');
        $(this).addClass('td_home-slider__nav__link--current');
    });

    /**
     * Add the home slider navigation bar.
     */
    function addHomeSliderNav() {
        let home_sliders = $(".td_home-slider__container > div");
        let count_home_sliders = home_sliders.length;

        if (count_home_sliders > 1) {
            $('<ul class="td_home-slider__nav position-fixed bottom-0 start-50"></ul>').appendTo('main');
            let home_slider_nav = $("ul.td_home-slider__nav");

            for (let i = 1; i <= count_home_sliders; i++) {
                $('<li class="td_home-slider__nav__link" data-home-slider__link = ' + i + '><i class="fas fa-circle"></i></li>').appendTo(home_slider_nav);
            }

            $('.td_home-slider__nav__link').first().addClass('td_home-slider__nav__link--current');
        }
    }

    /**
     * Animations
     */
    var current_page_id = $("#main-container").data("current_page");
    var current_page = $(`${current_page_id}`);

    var current_page_boutique_id = $(".lq_boutique").data("current_link_boutique");
    var current_page_boutique = $(`${current_page_boutique_id}`);



    /**
    * Transmet le href de la page sur laquelle on veut aller ainsi que l'id de la page courante à la fonction de transition animée
    */
    $(document).on('click', 'a', function (e) {
        let hrefLink = $(this).attr("href");
        if (hrefLink != current_page_id) {
            animatedTransition(hrefLink, current_page, current_page_id, current_page_boutique, current_page_boutique_id);
            e.preventDefault();
        }
    });


    function animatedTransition(targetId, currentPage, currentPageId, currentPageBoutique, currentPageBoutiqueId) {

        if (targetId == "#quiSommesNous") {
            if (currentPageId == "#home") {
                home.fadeOut(1000);
            }
            else if (currentPageId == "#boutique") {
                boutique.css({ left: "100%" });
                setTimeout(function () {
                    boutique.hide();
                }, 1000);
            }
            else if (currentPageId == "#contact") {
                contact.css({ right: "100%" });
                contact.css({ transform: "rotate(50deg)" });
                setTimeout(function () {
                    contact.removeClass("row");
                    contact.addClass("display-none");
                }, 1000);
            }

            setTimeout(function () {
                about.css({ transform: "scale(0)" });
                about.removeClass("display-none").addClass("display-flex");
            }, 1000);
            setTimeout(function () {
                about.css({ transform: "scale(1)" });
            }, 1100);

            // Nouvelle page courante
            $("#main-container").attr("data-current_page", targetId);
            current_page = $(`${targetId}`);
            current_page_id = targetId;
        }

        else if (targetId == "#home") {
            if (currentPageId == "#quiSommesNous") {
                about.css({ transform: "scale(0)" });
                setTimeout(function () {
                    about.removeClass("display-flex").addClass("display-none");
                }, 1000);
            }
            else if (currentPageId == "#boutique") {
                boutique.css({ left: "100%" });
                setTimeout(function () {
                    boutique.hide();
                }, 1000);
            }
            else if (currentPageId == "#contact") {
                contact.css({ right: "100%" });
                contact.css({ transform: "rotate(50deg)" });
                setTimeout(function () {
                    contact.removeClass("row");
                    contact.addClass("display-none");
                }, 1000);
            }

            setTimeout(function () {
                home.fadeIn(500);
                about.removeClass("display-flex").addClass("display-none");
            }, 1000);

            // Nouvelle page courante
            $("#main-container").attr("data-current_page", targetId);
            current_page = $(`${targetId}`);
            current_page_id = targetId;
        }

        else if (targetId == "#boutique") {
            if (currentPageId == "#home") {
                home.fadeOut(1000);
            }
            else if (currentPageId == "#quiSommesNous") {
                about.css({ transform: "scale(0)" });
                setTimeout(function () {
                    about.removeClass("display-flex").addClass("display-none");
                }, 1000);
            }
            else if (currentPageId == "#contact") {
                contact.css({ right: "100%" });
                contact.css({ transform: "rotate(50deg)" });
                setTimeout(function () {
                    contact.removeClass("row");
                    contact.addClass("display-none");
                }, 1000);
            }

            setTimeout(function () {
                boutique.css({ left: "100%" });
                boutique.show();
            }, 1000);
            setTimeout(function () {
                boutique.css({ left: "0" });
            }, 1100);

            // Nouvelle page courante
            $("#main-container").attr("data-current_page", targetId);
            current_page = $(`${targetId}`);
            current_page_id = targetId;
        }

        else if (targetId == "#contact") {
            if (currentPageId == "#home") {
                home.fadeOut(1000);
            }
            else if (currentPageId == "#boutique") {
                boutique.css({ left: "100%" });
                setTimeout(function () {
                    boutique.hide();
                }, 1000);
            }
            else if (currentPageId == "#quiSommesNous") {
                about.css({ transform: "scale(0)" });
                setTimeout(function () {
                    about.removeClass("display-flex").addClass("display-none");
                }, 1000);
            }

            setTimeout(function () {
                contact.css({ right: "100%" });
                contact.css({ transform: "rotate(-50deg)" });
                contact.removeClass("display-none");
                contact.addClass("row");
            }, 1000);
            setTimeout(function () {
                contact.css({ right: "0" });
                contact.css({ transform: "rotate(0)" });
            }, 1100);

            // Nouvelle page courante
            $("#main-container").attr("data-current_page", targetId);
            current_page = $(`${targetId}`);
            current_page_id = targetId;
        }

        if (targetId == "#lq_product2") {
            if (currentPageBoutiqueId == "#lq_product1") {
                page_boutique_1.css({ top: "100%" });
            }
        }
    }

    /*lien entre produits et page contact*/
    $('.lq_link-more').click(function () {
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
    $('#send').click(function (e) {
        e.preventDefault();
        $('#contactForm').trigger('reset');
        $("#successText").text('Message bien envoyé !');
        $("#successNotification").jqxNotification("open");
    });

    $('#return').click(function () {
        $('#contactForm').trigger('reset');
        $("#errorText").text("Message non envoyé");
        $("#errorNotification").jqxNotification("open");
    });

    /*dark mode*/
    $('.ls_checkbox').on('change', function () {
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

    $('#validInscription').click(function () {
        $("#successText").text('Inscription effectuée');
        $("#successNotification").jqxNotification("open");
    });


    //Affichage lightbox
    $(".lq_img").click(function () {
        var img = $(this).attr('src');
        var imgLightbox = img.replace("lq_img--petites", "lq_img--grandes");
        $(".lq_img--lightbox").html("<img src='" + imgLightbox + "'>");
        $(".lq_img--lightbox").fadeIn("slow").css("display", "flex");
    });

    $(".lq_img--lightbox").click(function () {
        $(".lq_img--lightbox").fadeOut("fast");
    });


});