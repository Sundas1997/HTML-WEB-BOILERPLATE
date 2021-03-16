var currencies = [{
        id: "btc",
        text: "Bitcoin",
        selected: true
    },
    {
        id: "dgb",
        text: "DigiByte",
    },

    {
        id: "eth",
        text: "Ethereum",
    },

    {
        id: "ltc",
        text: "Litecoin",
    },

    {
        id: "aave",
        text: "Aave",
    },

    {
        id: "aion",
        text: "Aion",
    },

    {
        id: "ampl",
        text: "Ampleforth",
    },

    {
        id: "atom",
        text: "Atom",
    },

    {
        id: "ada",
        text: "Cardano",
    },

    {
        id: "bat",
        text: "Basic Attention Token",
    },

    {
        id: "bch",
        text: "Bitcoin Cash",
    },

    {
        id: "bsv",
        text: "Bitcoin SV",
    },
    {
        id: "bnb",
        text: "Binance Coin",
    },

    {
        id: "bnt",
        text: "Bancor Network Token",
    },

    {
        id: "busd",
        text: "BUSD",
    },

    {
        id: "link",
        text: "Chainlink",
    },

    {
        id: "celr",
        text: "Celer Network",
    },

    {
        id: "crv",
        text: "Curve DAO",
    },

    {
        id: "dai",
        text: "Dai",
    },
    {
        id: "dcr",
        text: "Decred",
    },
    {
        id: "dia",
        text: "DIA",
    },
    {
        id: "dnt",
        text: "District0x",
    },
    { id: "doge", text: "Dogecoin" },
    { id: "etc", text: "Eth Classic" },
    { id: "evx", text: "Everex" },
    { id: "fil", text: "Filecoin" },
    { id: "flo", text: "Florin" },
    { id: "hive", text: "Hive" },
    { id: "zen", text: "Horizen" },
    { id: "grs", text: "Groestlcoin" },
    { id: "gvt", text: "Genesis Vision" },
    { id: "icx", text: "Icon" },
    { id: "kmd", text: "Komodo" },
    { id: "knc", text: "Kyber Network" },
    { id: "lto", text: "LTO Network" },
    { id: "nano", text: "Nano" },
    { id: "nav", text: "NAV Coin" },
    { id: "nebl", text: "Neblio" },
    { id: "nxs", text: "Nexus" },
    { id: "neo", text: "NEO" },
    { id: "xem", text: "NEM" },
    { id: "omg", text: "OmiseGO" },
    { id: "ont", text: "Ontology" },
    { id: "pax", text: "Paxos Standard" },
    { id: "plr", text: "Pillar" },
    { id: "pivx", text: "Pivx" },
    { id: "dot", text: "Polkadot" },
    { id: "pot", text: "Potcoin" },
    { id: "powr", text: "Power Ledger" },
    { id: "ppt", text: "Populous" },
    { id: "qtum", text: "Qtum Ignition" },
    { id: "rvn", text: "Ravencoin" },
    { id: "renbtc", text: "RenBTC" },
    { id: "ren", text: "Republic Protocol" },
    { id: "xrp", text: "Ripple" },
    { id: "sc", text: "Siacoin" },
    { id: "xlm", text: "Stellar Lumens" },
    { id: "steem", text: "Steem" },
    { id: "strax", text: "Stratis" },
    { id: "sxp", text: "Swipe" },
    { id: "snx", text: "Synthetix Network Token" },
    { id: "trb", text: "Tellor" },
    { id: "xtz", text: "Tezos" },
    { id: "tfuel", text: "Theta Fuel" },
    { id: "theta", text: "Theta" },
    { id: "tomo", text: "TomoChain" },
    { id: "tusd", text: "True USD" },
    { id: "trx", text: "Tron" },
    { id: "usdc", text: "USDC" },
    { id: "usdt", text: "USDT - ERC20" },
    { id: "wbtc", text: "Wrapped Bitcoin" },
    { id: "zil", text: "Zilliqa" },
    { id: "zrx", text: "0x Protocol Token" },
];

$(document).ready(function() {
    $(function() {
        var countries = ["INDIA", "PAKISTAN", "CHINA", "IRAN", "IRAQ"];

        $("#country").autocomplete({
            source: countries,
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
    for (var i = 0; i < revealElements.length; i++) {
        // create a scene for each element
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

    if (document.getElementById("bm")) {
        var animation = bodymovin.loadAnimation({
            container: document.getElementById("bm"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "json/sell-crypto.json",
        });
    }

    if (document.getElementById("about")) {
        var animation2 = bodymovin.loadAnimation({
            container: document.getElementById("about"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "json/about-anime.json",
        });
    }

    if (document.getElementById("about-2")) {
        var animation3 = bodymovin.loadAnimation({
            container: document.getElementById("about-2"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "json/about-2.json",
        });
    }

    if (document.getElementById("exchange")) {
        var animation3 = bodymovin.loadAnimation({
            container: document.getElementById("exchange"),
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "json/transaction.json",
        });
    }
    if (document.getElementById("transaction-done")) {
        var animation3 = bodymovin.loadAnimation({
            container: document.getElementById("transaction-done"),
            renderer: "svg",
            autoplay: false,
            loop: true,
            path: "json/transaction-complete.json",
        });
    }

    $(".nav-pills-blog").on("click", function(e) {
        $(e.target).toggleClass("active");
    });

    var tabs = $(".tab");
    var steps = $(".step");
    var line = $(".line-worked");
    let iterator = 1;
    $(".next-btn").on("click", function() {
        if (iterator < tabs.length) {
            $(steps[iterator]).addClass("active");
            $(tabs[iterator - 1]).toggleClass("d-none");
            $(tabs[iterator]).toggleClass("d-none");
            var perc = 30 * iterator;
            $(line).css("width", `${perc}%`);
            iterator = iterator + 1;
            if (iterator == tabs.length) {
                animation3.play();
            }
        }
    });

    $(".currency").select2({
        data: currencies,
        templateResult: function(idioma) {
            var $span = $(
                `<div class="row" style=" overflow-x:hidden"><div class="col-2" ><img height="20px" src="https://changeangel.io/images/crypto-icons/${idioma.id}.svg"/></div><div class="col-2" style="padding-left:10px; text-transform:uppercase;">${idioma.id} </div><div class="col-8" style="text-align:right;">${idioma.text}</div></div>`
            );
            return $span;
        },
        templateSelection: function(idioma) {
            if (idioma.element) {
                var $span = $(
                    `<span class="select2-font-size" style="text-transform: uppercase;">${idioma.id}</span>`
                );
            }
            return $span;
        },
    });
});