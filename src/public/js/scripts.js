$(document).ready(function () {
    console.log("Script loaded!");
    let lastScrollTop = 0;
    const navbar = $(".custom-navbar");
    let isHovered = false; // To track if the navbar is being hovered

    // Track when the navbar is hovered
    navbar.hover(
        function () {
            isHovered = true; // Set to true when hovered
            console.log("Navbar hovered");
        },
        function () {
            isHovered = false; // Set to false when not hovered
            console.log("Navbar not hovered");
        }
    );

    // Handle scroll event
    $(window).on("scroll", function () {
        let currentScrollTop = $(this).scrollTop();
        console.log("Scroll Position:", currentScrollTop);

        // Only hide if the navbar is not being hovered
        if (!isHovered) {
            if (currentScrollTop > lastScrollTop && currentScrollTop > 300) {
                navbar.addClass("hidden");
                console.log("Navbar hidden");
            } else if (currentScrollTop < lastScrollTop) {
                navbar.removeClass("hidden");
                console.log("Navbar shown");
            }
        } else {
            console.log("Navbar hover detected; skipping hide");
        }

        lastScrollTop = currentScrollTop;
    });
});

// Initialize AOS for animations
AOS.init();



function goto(evt) {
  const link = $(evt).attr("link");
  window.open(link);
}

