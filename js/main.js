const menuCategories = document.getElementById('menuCategories');
const dropdownMenu = document.getElementById('dropdownMenu');
const optionsArrowContainer = document.getElementById('optionsArrowContainer');
const departamentItems = document.querySelectorAll('.nav-content p:not(#menuCategories p)');

function showDropdown(comSetas = false) {
    dropdownMenu.classList.add('show');
    optionsArrowContainer.style.display = comSetas ? 'block' : 'none';
}

function hideDropdown() {
    dropdownMenu.classList.remove('show');
}

menuCategories.addEventListener('mouseenter', () => {
    showDropdown(true);
});

menuCategories.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownMenu.matches(':hover')) {
            hideDropdown();
        }
    }, 100);
});

departamentItems.forEach(departament => {
    departament.addEventListener('mouseenter', () => {
        showDropdown(false); // sem setas
    });

    departament.addEventListener('mouseleave', () => {
        setTimeout(() => {
            if (!dropdownMenu.matches(':hover')) {
                hideDropdown();
            }
        }, 100);
    });
});

dropdownMenu.addEventListener('mouseenter', () => {
    dropdownMenu.classList.add('show');
});

dropdownMenu.addEventListener('mouseleave', () => {
    hideDropdown();
});

// SWIPER
const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 20,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
        1280: {
          slidesPerView: 5,
        },
    },

    autoplay: {
        delay: 3100,
        disableOnInteraction: true,
    },
});

window.addEventListener("resize", () => {
    swiper.update();
});
