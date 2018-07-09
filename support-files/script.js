/*       // navbar becomes fixed after hero img

        $(document).ready(function () {
             $(window).bind('scroll', function () {
                 var navHeight = $(window).height() - 35;
                 if ($(window).scrollTop() > navHeight) {
                     $('nav').addClass('fixed');
                 } else {
                     $('nav').removeClass('fixed');
                 }
             });
         });
*/

//Hero image zoom
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    $(".zoom-me .hero").css({
        width: (100 + scroll / 5) + "%",
        top: -(scroll / 10) + "%",
        //Blur below
        "-webkit-filter": "blur(" + (scroll / 100) + "px)",
        filter: "blur(" + (scroll / 100) + "px)"
    });
});


// Change background of nav bar on scroll at 700
$(window).scroll(function () {
    var scrollviz = $(window).scrollTop();
    if (scrollviz > window.innerHeight - 700) {
        $(".invizbar").removeClass("white");
    } else {
        $(".invizbar").addClass("white");
    }
});


//Navbar responsive at 900px 

function responsiveNav() {
    var x = document.getElementById("mySmallnav");
    if (x.className === "smallnav") {
        x.className += " responsive";
    } else {
        x.className = "smallnav";
    }
}


// When the user scrolls the page, execute scrollInd 
window.onscroll = function () {
    scrollInd()
};

function scrollInd() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}


(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.12';
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));



