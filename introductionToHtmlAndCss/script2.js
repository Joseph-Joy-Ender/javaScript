let slideIndex = 0;
function shuffleSlides() {
    const container = document.getElementById('sliderContainer');
    let slides = container.getElementsByClassName('slide');

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 500); // Change slide every 2 seconds

    // Convert HTMLCollection to an array for easy shuffling
    slides = Array.from(slides);

    // Shuffle the slides array
    slides.sort(function() {
        return 0.5 - Math.random();
    });

    // Append the shuffled slides back to the container
    slides.forEach(function(slide) {
        container.appendChild(slide);
    });
}

// Call shuffleSlides function to shuffle on load or as needed
shuffleSlides();
