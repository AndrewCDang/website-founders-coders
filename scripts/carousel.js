let currentIndex = 1;

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

prevButton.style.opacity = 0.5;
function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (direction === 1 && currentIndex >= slides.length - 1) {
        return;
    }
    if (direction === -1 && currentIndex === 0) {
        return;
    }
    currentIndex += direction;
    if (currentIndex === 0) {
        slides[0].style.opacity = 1;
        slides[1].style.opacity = 0.5;
        slides[2].style.opacity = 0.5;
    } else if (currentIndex === 1) {
        slides[0].style.opacity = 0.5;
        slides[1].style.opacity = 1;
        slides[2].style.opacity = 0.5;
    } else if (currentIndex === 2) {
        slides[0].style.opacity = 0.5;
        slides[1].style.opacity = 0.5;
        slides[2].style.opacity = 1;
    }

    if (currentIndex >= slides.length - 1) {
        nextButton.style.opacity = 0.5;
    } else {
        nextButton.style.opacity = 1;
    }

    if (currentIndex === 0) {
        prevButton.style.opacity = 0.5;
    } else {
        prevButton.style.opacity = 1;
    }

    const carousel = document.querySelector(".carousel");
    const translateValue = `translateX(-${currentIndex * 100}%)`;
    carousel.style.transform = translateValue;
}

nextButton.addEventListener("click", () => moveSlide(1));
prevButton.addEventListener("click", () => moveSlide(-1));
