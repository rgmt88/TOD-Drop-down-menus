function carousel() {
    let slideIndex = 1;
    let timer = null;

    function setupTimer() {
        clearInterval(timer);
        timer = setInterval(() => moveSlide(1), 5000);
    }

    function moveSlide(n) {
        slideIndex += n;
        showSlides(slideIndex);
        setupTimer();
    }

    function currentSlide(n) {
        slideIndex = n;
        showSlides(slideIndex);
        setupTimer();
    }

    function showSlides(n) {
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('active');
    }

    function initCarousel() {
        document.querySelector('.prev')?.addEventListener('click', () => moveSlide(-1));
        document.querySelector('.next')?.addEventListener('click', () => moveSlide(1));
        
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => dot.addEventListener('click', () => currentSlide(i + 1)));

        showSlides(slideIndex);
        setupTimer();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCarousel);
    } else {
        initCarousel();
    }
}

carousel();
