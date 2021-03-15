$(document).ready(function() {
    $(function() {
        var availableTags = [
            "AUR",
            "BCC",
            "BCH",
            "BTC",
            "DASH",
            "DOGE",
            "EOS",
            "ETC",
            "ETH",
            "GRC",
            "LTC",
            "KOI",
            "MZC",
            "NEO",
            "NMC",
            "POT",
            "PPC",
            "TIT",
            "USDC",
            "USDT",
            "VTC",
            "XEM",
            "XLM",
            "XMR",
            "XPM",
            "XRP",
            "XVG",
            "ZEC"
        ];
        var countries = [
            "INDIA",
            "PAKISTAN",
            "CHINA",
            "IRAN",
            "IRAQ"
        ];
        $("#receive").autocomplete({
            source: availableTags,
            minLength: 0
        }).focus(function() {
            $(this).autocomplete('search', $(this).val());
        });
        $("#send").autocomplete({
            source: availableTags,
            minLength: 0
        }).focus(function() {
            $(this).autocomplete('search', $(this).val())
        });
        $("#receive-2").autocomplete({
            source: availableTags,
            minLength: 0
        }).focus(function() {
            $(this).autocomplete('search', $(this).val())
        });
        $("#send-2").autocomplete({
            source: availableTags,
            minLength: 0
        }).focus(function() {
            $(this).autocomplete('search', $(this).val())
        });
        $("#country").autocomplete({
            source: countries
        });
    });

    var revealElement = document.getElementById("banner");
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
            triggerElement: revealElement, // y value not modified, so we can use element as trigger as well
            offset: 50, // start a little later
            triggerHook: 0.9,
        })
        .setClassToggle(revealElement, "visible") // add class toggle
        .addTo(controller);

    var revealElements = document.getElementsByClassName("scrollMagic");
    for (var i = 0; i < revealElements.length; i++) { // create a scene for each element
        new ScrollMagic.Scene({
                triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
                offset: 100, // start a little later
                triggerHook: 0.9,
            })
            .setClassToggle(revealElements[i], "visible") // add class toggle
            .addTo(controller);
    }

    $(".capsule-item").on("click", function(e) {
        $(".capsule-item").removeClass("active");
        $(e.target).addClass("active");

        // add capsule functionality here
    });

    if (document.getElementById('bm')) {
        var animation = bodymovin.loadAnimation({
            container: document.getElementById('bm'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'json/sell-crypto.json'
        });

    }

    if (document.getElementById('about')) {
        var animation2 = bodymovin.loadAnimation({
            container: document.getElementById('about'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'json/about-anime.json'
        });
    }


    if (document.getElementById('about-2')) {
        var animation3 = bodymovin.loadAnimation({
            container: document.getElementById('about-2'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'json/about-2.json'
        });
    }

    if (document.getElementById('exchange')) {
        var animation3 = bodymovin.loadAnimation({
            container: document.getElementById('exchange'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: 'json/transaction.json'
        });
    }
    if (document.getElementById('transaction-done')) {
        var animation3 = bodymovin.loadAnimation({
            container: document.getElementById('transaction-done'),
            renderer: 'svg',
            autoplay: false,
            loop: true,
            path: 'json/transaction-complete.json'
        });
    }

    $(".nav-pills").on('click', function(e) {
        $(e.target).toggleClass('active');
    })


    var tabs = $(".tab");
    var steps = $(".step");
    var line = $(".line-worked");
    let iterator = 1;
    $(".next-btn").on('click', function() {
        if (iterator < tabs.length) {
            $(steps[iterator]).addClass("active");
            $(tabs[iterator - 1]).toggleClass("d-none");
            $(tabs[iterator]).toggleClass("d-none");
            var perc = 30 * iterator;
            $(line).css("width", `${perc}%`)
            iterator = iterator + 1;
            if (iterator == tabs.length) {
                animation3.play();
            }
        }
    });
});





$(document).ready(function() {

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;

    $(".next").click(function() {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $(".previous").click(function() {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function(now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 600
        });
    });

    $('.radio-group .radio').click(function() {
        $(this).parent().find('.radio').removeClass('selected');
        $(this).addClass('selected');
    });

    $(".submit").click(function() {
        return false;
    })

});