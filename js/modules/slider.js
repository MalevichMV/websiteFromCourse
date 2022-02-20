function slider({container, prevArrow, nextArrow, index, total}) {
    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }
    
	const slides = document.querySelectorAll(container),
        prev = document.querySelector(prevArrow),
        next = document.querySelector(nextArrow),
        slideIndex = document.querySelector(index),
        slideTotal = document.querySelector(total);
    let currentSlide = 0;

    slideIndex.innerHTML = getZero(currentSlide + 1);
    slideTotal.innerHTML = getZero(slides.length);
    slides.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
    slides[currentSlide].classList.add('show', 'fade');
    slides[currentSlide].classList.remove('hide');

    function showPrevSlide() {
        slides[currentSlide].classList.remove('show', 'fade');
        slides[currentSlide].classList.add('hide');
        if (currentSlide === 0)
        {
            currentSlide = slides.length - 1;
            slideIndex.innerHTML = getZero(slides.length);   
        }
        else
        {
            currentSlide--;
            slideIndex.innerHTML = getZero(currentSlide+1);
        }
            slides[currentSlide].classList.add('show', 'fade');
            slides[currentSlide].classList.remove('hide');
    };

    function showNextSlide() {
        slides[currentSlide].classList.remove('show', 'fade');
        slides[currentSlide].classList.add('hide');
        if ((currentSlide + 1) === slides.length)
        {
            currentSlide = 0;
            slideIndex.innerHTML = getZero(1);   
        }
        else
        {
            currentSlide++;
            slideIndex.innerHTML = getZero(currentSlide+1);
        }
            slides[currentSlide].classList.add('show', 'fade');
            slides[currentSlide].classList.remove('hide');
    };

    prev.addEventListener('click', function(event) {
        showPrevSlide();
    });

    next.addEventListener('click', function(event) {
        showNextSlide();
    });
}

export default slider;