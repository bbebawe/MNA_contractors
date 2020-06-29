$(window).on('scroll', function () {
    /* checks current scroll position */
    let y_scroll_pos = window.pageYOffset;
    /* checks the height of the browser */
    let scroll_pos_test = 51;
    let logo = document.getElementById("logo");

    /* if splashscreen is visible, use fixed, else use scroll */
    if (y_scroll_pos > scroll_pos_test) {
        logo.style.display = "none";
    } else {
        logo.style.display = "inline-block";
    }
});