$(document).ready(function () {
    var home = $("#home");
    var about = $("#quiSommesNous");
    var boutique = $("#boutique");
    var contact = $("#contact");

    // var clone_home = home.clone();
    // var clone_about = about.clone();
    // var clone_boutique = boutique.clone();
    // var clone_contact = contact.clone();


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


    var current_page_id = $("#main-container").data("current_page");
    var current_page = $(`${current_page_id}`);

    /**
    * Transmet le href de la page sur laquelle on veut aller ainsi que l'id de la page courante à la fonction de transition animée
    */
    $(document).on('click', 'a', function (e) {
        let hrefLink = $(this).attr("href");
        if (hrefLink != current_page_id) {
            animatedTransition(hrefLink, current_page, current_page_id);
            e.preventDefault();
        }
    });


    function animatedTransition(targetId, currentPage, currentPageId) {

        if (targetId == "#quiSommesNous") {
            if (currentPageId == "#home") {
                home.fadeOut(1000);
            } else if (currentPageId == "#boutique") {
                boutique.css({ left: "100%" });
                setTimeout(function () {
                    boutique.hide();
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
        } else if (targetId == "#home") {
            if (currentPageId == "#quiSommesNous") {
                about.css({ transform: "scale(0)" });
                setTimeout(function () {
                    about.removeClass("display-flex").addClass("display-none");
                }, 1000);
            } else if (currentPageId == "#boutique") {
                boutique.css({ left: "100%" });
                setTimeout(function () {
                    boutique.hide();
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
        } else if (targetId == "#boutique") {
            if (currentPageId == "#home") {
                home.fadeOut(1000);
            } else if (currentPageId == "#quiSommesNous") {
                about.css({ transform: "scale(0)" });
                setTimeout(function () {
                    about.removeClass("display-flex").addClass("display-none");
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
    }
});