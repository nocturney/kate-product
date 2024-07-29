document.addEventListener('DOMContentLoaded', function () {
    const serviceItems = document.querySelectorAll('.service-item');
    const faqItems = document.querySelectorAll('.faq-item');
    const workItems = document.querySelectorAll('.process-step');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    serviceItems.forEach(item => {
        observer.observe(item);
    });

    faqItems.forEach(item => {
        observer.observe(item);
    });

    workItems.forEach(item => {
        observer.observe(item);
    });

    const modals = document.querySelectorAll('.modal');
    const openButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.modal .close');

    openButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const service = event.currentTarget.getAttribute('data-service');
            const modal = document.querySelector(`#modal-${service}`);
            if (modal) {
                modal.style.display = 'block';
                setTimeout(() => {
                    modal.setAttribute('open', '');
                }, 10);
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const modal = event.currentTarget.closest('.modal');
            if (modal) {
                modal.removeAttribute('open');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 200);
            }
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.removeAttribute('open');
                setTimeout(() => {
                    modal.style.display = 'none';
                }, 200);
            }
        });
    });

    // Menu functionality
    const menuButton = document.getElementById('menu');
    const closeButton = document.getElementById('close-menu');
    const menuModal = document.getElementById('menu-modal');
    const menuItems = document.querySelectorAll('.menu-item');
    const logo = document.querySelector('.menu-logo');

    if (menuButton && closeButton && menuModal) {
        menuButton.addEventListener('click', function () {
            menuModal.showModal();
        });

        closeButton.addEventListener('click', function () {
            menuModal.close();
        });

        menuItems.forEach(item => {
            item.addEventListener('click', function () {
                menuModal.close();
            });
        });

        logo.addEventListener('click', function () {
            menuModal.close();
        });
    }
});
