let currentSlide = 0;

const slides = document.querySelectorAll(".slide");

function showSlide(number) {
    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[number].classList.add("active");
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        showSlide(currentSlide);
    }
}

function previousSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        showSlide(currentSlide);
    }
}

const slider = document.getElementById("percentageSlider");
const guessValue = document.getElementById("guessValue");

slider.addEventListener("input", function() {
    guessValue.textContent = slider.value;
});

function revealAnswer() {
    const answer = document.getElementById("answer");
    answer.classList.remove("hidden");
}