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




// YouTube iframe API: handle play/pause to adjust project description

function onYouTubeIframeAPIReady() {
    document.querySelectorAll('.video-wrapper iframe').forEach((iframe) => {
        const player = new YT.Player(iframe, {
            events: {
                'onStateChange': handleStateChange
            }
        });
    });
}

function handleStateChange(event) {
    const state = event.data;              // 1 = playing, 2 = paused, etc.
    const player = event.target;

    console.log("state change called");

    // Get the actual iframe element from the player
    const iframe = (typeof player.getIframe === 'function')
        ? player.getIframe()
        : null;

    if (!iframe) return;

    // Go up to the .project-image-container
    const imageContainer = iframe.closest('.project-image-container');
    if (!imageContainer) return;

    // Get the card wrapper (.project-link)
    const projectLink = imageContainer.closest('.project-link');
    if (!projectLink) return;

    // Move to its sibling: .project-description-container
    const descriptionContainer = imageContainer.nextElementSibling;
    if (!descriptionContainer || !descriptionContainer.classList.contains('project-description-container')) {
        return;
    }

    // Find the .project-description inside it
    const projectDescription = descriptionContainer.querySelector('.project-description');
    if (!projectDescription) return;

    // 🎥 PLAYING: hide description + lock image in color
    if (state === YT.PlayerState.PLAYING) {
        console.log("Video is playing");

        // fade/hide text (Tailwind style, or your own class)
        projectDescription.classList.add('opacity-0');

        // keep image in full color & scale
        projectLink.classList.add('is-playing');

        // (Optional) only one active at a time:
        document.querySelectorAll('.project-link.is-playing').forEach(link => {
            if (link !== projectLink) link.classList.remove('is-playing');
        });
    }

    // ⏸ PAUSED or ⏹ ENDED: show description + revert image
    if (state === YT.PlayerState.PAUSED || state === YT.PlayerState.ENDED) {
        console.log("Video is paused or ended");

        projectDescription.classList.remove('opacity-0');
        projectLink.classList.remove('is-playing');
    }
}

 


function goto(evt) {
  const link = $(evt).attr("link");
  window.open(link);
}

