$(window).on('scroll', function () {
    /* checks current scroll position */
    let y_scroll_pos = window.pageYOffset;
    /* checks the height of the browser */
    let scroll_pos_test = 0;
    let logo = document.getElementById("logo");
    let navbar = document.getElementById('navbar');

    if (y_scroll_pos > scroll_pos_test) {
        navbar.classList.add("navbar-transition");
        document.getElementById("logo").style.height = "50px";
        document.getElementById("logo").style.width = "75px";
        
        let x = document.getElementsByClassName("divider");
        for (i = 0; i < x.length; i++) {
            x[i].style.height = '5px';
        }

    } else {
        navbar.classList.remove("navbar-transition");
        document.getElementById("logo").style.height = "66px";
        document.getElementById("logo").style.width = "100px";
    }
});