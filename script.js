

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
});
    
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal-web-design");
    const openButtons = document.querySelectorAll(".open-modal[data-service='web-design']");
    const closeButton = document.querySelector(".modal .close");

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.showModal();
        });
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal-web-design-framer");
    const openButtons = document.querySelectorAll(".open-modal[data-service='web-design-framer']");
    const closeButton = document.querySelector(".modal .close");

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.showModal();
        });
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal-web-design-programmer");
    const openButtons = document.querySelectorAll(".open-modal[data-service='web-design-programmer']");
    const closeButton = document.querySelector(".modal .close");

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.showModal();
        });
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById("modal-graphic-design");
    const openButtons = document.querySelectorAll(".open-modal[data-service='graphic-design']");
    const closeButton = document.querySelector(".modal .close");

    openButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.showModal();
        });
    });

    closeButton.addEventListener('click', () => {
        modal.close();
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
        }
    });
});