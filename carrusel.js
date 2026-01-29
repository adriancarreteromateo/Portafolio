document.addEventListener('DOMContentLoaded', () => {
    const carrusel = document.getElementById('carrusel');
    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');

    function actualizarBotones() {
        const scrollLeft = Math.ceil(carrusel.scrollLeft);
        const maxScroll = carrusel.scrollWidth - carrusel.clientWidth;

        if (scrollLeft <= 0) {
            btnPrev.classList.add('disabled');
        } else {
            btnPrev.classList.remove('disabled');
        }

        if (scrollLeft >= maxScroll - 1) { 
            btnNext.classList.add('disabled');
        } else {
            btnNext.classList.remove('disabled');
        }
    }

    btnNext.addEventListener('click', () => {
        const cardWidth = carrusel.querySelector('.proyecto').offsetWidth;
        const gap = parseFloat(window.getComputedStyle(carrusel).gap) || 0;
        carrusel.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
    });

    btnPrev.addEventListener('click', () => {
        const cardWidth = carrusel.querySelector('.proyecto').offsetWidth;
        const gap = parseFloat(window.getComputedStyle(carrusel).gap) || 0;
        carrusel.scrollBy({ left: -(cardWidth + gap), behavior: 'smooth' });
    });

    carrusel.addEventListener('scroll', actualizarBotones);
    window.addEventListener('resize', actualizarBotones);
    
    actualizarBotones();
});