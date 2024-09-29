const swiper = new Swiper('.swiper', {
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        480: {
            slidesPerView: 1, 
        },
        769: {
            slidesPerView: 2, 
        },
		990: {
            slidesPerView: 3, 
        },
        1200: {
            slidesPerView: 4, 
        }
    },
    on: {
        reachEnd: function () {
            this.navigation.nextEl.classList.add('disabled');
        },
        reachBeginning: function () {
            this.navigation.prevEl.classList.add('disabled');
        },
        fromEdge: function () {
            this.navigation.nextEl.classList.remove('disabled');
            this.navigation.prevEl.classList.remove('disabled');
        }
    }
});
