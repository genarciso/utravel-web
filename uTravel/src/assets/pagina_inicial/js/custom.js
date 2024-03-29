/*global jQuery:false */
(function ($) {
    $(window).load(function() {
        $("#navigation").sticky({
            topSpacing: 0
        });
    });

    wow = new WOW({
        animateClass: 'animated',
        offset: 0
    });
    wow.init();

    $('ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function() {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('.navbar-nav li a').bind('click', function(event) {
            var $anchor = $(this);
            var nav = $($anchor.attr('href'));
            if (nav.length) {
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            }
        });
        $('a.totop,a#btn-scroll,a.btn-slide').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });
    wow = new WOW({
        animateClass: 'animated',
        offset: 0
    });
    wow.init();

    $('.testimonialslide').flexslider({
        animation: "slide",
        slideshow: false,
        directionNav: false,
        controlNav: true
    });

    //stats
    var runOnce = true;
    jQuery(".stats").on("appear", function (data) {
        var counters = {};
        var i = 0;
        if (runOnce) {
            jQuery('.number').each(function () {
                counters[this.id] = $(this).html();
                i++;
            });
            jQuery.each(counters, function (i, val) {
                //console.log(i + ' - ' +val);
                jQuery({
                    countNum: 0
                }).animate({
                    countNum: val
                }, {
                    duration: 3000,
                    easing: 'linear',
                    step: function () {
                        jQuery('#' + i).text(Math.floor(this.countNum));
                    }
                });
            });
            runOnce = false;
        }
    });

    //parallax
    if ($('#parallax1').length || $('#parallax2').length) {
        $(window).stellar({
            responsive: true,
            scrollProperty: 'scroll',
            parallaxElements: false,
            horizontalScrolling: false,
            horizontalOffset: 0,
            verticalOffset: 0
        });
    }

    //video bg
    $(".bg-player").YTPlayer();

    $("#js-rotating").Morphext({
        // Animation type (refer to Animate.css for a list of available animations)
        animation: "fadeInDown",
        // An array of words to rotate are created based on this separator. Change it if you wish to separate the words differently (e.g. So Simple | Very Doge | Much Wow | Such Cool)
        separator: "-",
        // The delay between each word in milliseconds
        speed: 3000
    });

    //nicescroll
    $("html").niceScroll({
        zindex: 999,
        cursorborder: "",
        cursorborderradius: "0px",
        cursorwidth: "10px",
        cursorcolor: "#555",
        cursoropacitymin: .5
    });

    // map button toggle
    $(".gmap-btn").click(function () {
        $("#map-btn1").toggleClass("btn-show", "btn-hide", 1000);
        $("#map-btn1").toggleClass("btn-hide", "btn-show", 1000);
        $("#map-btn2").toggleClass("btn-hide", "btn-show", 1000);
        $("#map-btn2").toggleClass("btn-show", "btn-hide", 1000);
        $("#map-btn2").toggleClass("close-map-button", "open-map-button", 1000);
        $("#map-btn2").toggleClass("open-map-button", "close-map-button", 1000);
        $("#map").toggleClass("close-map", "open-map", 1000);
        $("#map").toggleClass("open-map", "close-map", 1000);
        return false;
    });

    function initNice() {
        if ($(window).innerWidth() <= 960) {
            $('html').niceScroll().remove();
        } else {
            $("html").niceScroll({
                zindex: 999,
                cursorborder: "",
                cursorborderradius: "2px",
                cursorcolor: "#555",
                cursoropacitymin: .1
            });
        }
    }

    $(window).load(initNice);
    $(window).resize(initNice);

})(jQuery);
$(window).load(function () {
    $(".loader").delay(300).fadeOut();
    $("#page-loader").delay(500).fadeOut("slow");
});
