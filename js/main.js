const menuCategories = document.getElementById('menuCategories');
const dropdownMenu = document.getElementById('dropdownMenu');
const optionsArrowContainer = document.getElementById('optionsArrowContainer');
const departamentItems = document.querySelectorAll('.nav-content p:not(#menuCategories p)');

// Função para mostrar o menu com ou sem as setas
function showDropdown(comSetas = false) {
    dropdownMenu.classList.add('show');
    optionsArrowContainer.style.display = comSetas ? 'block' : 'none';
}

// Função para esconder o menu
function hideDropdown() {
    dropdownMenu.classList.remove('show');
}

// Hover em "Todas as Categorias"
menuCategories.addEventListener('mouseenter', () => {
    showDropdown(true); // com setas
});

menuCategories.addEventListener('mouseleave', () => {
    setTimeout(() => {
        if (!dropdownMenu.matches(':hover')) {
            hideDropdown();
        }
    }, 100);
});

// Hover nos itens "Departamento"
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

// Mantém o dropdown aberto enquanto o mouse estiver nele
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

    // autoplay: {
    //     delay: 3100,
    //     disableOnInteraction: true,
    // },
});
