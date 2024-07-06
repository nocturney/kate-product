// document.querySelectorAll('.open-modal').forEach(button => {
//     button.addEventListener('click', () => {
//         const service = button.getAttribute('data-service');
//         const modal = document.getElementById(`modal-${service}`);
//         modal.style.display = 'block';
//     });
// });

// document.querySelectorAll('.close').forEach(span => {
//     span.addEventListener('click', () => {
//         span.parentElement.parentElement.style.display = 'none';
//     });
// });

// window.onclick = function(event) {
//     if (event.target.classList.contains('modal')) {
//         event.target.style.display = 'none';
//     }
// }

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

// document.addEventListener('DOMContentLoaded', function () {
//     const menuPage = document.getElementById('menu-page');
//     const circles = document.querySelectorAll('.circle');

//     circles.forEach(circle => {
//         circle.addEventListener('click', () => {
//             menuPage.classList.add('visible');
//         });
//     });

    
//     menuPage.addEventListener('click', (event) => {
//         if (event.target === menuPage) {
//             menuPage.classList.remove('visible');
//         }
//     });

// document.getElementById('menu').addEventListener('click', function() {
//     this.classList.toggle('rotate');
// });





    // Lock the #services section while scrolling its content
    // let lastScrollTop = 0;

    // window.addEventListener('scroll', () => {
    //     const sectionTop = servicesSection.getBoundingClientRect().top;
    //     const sectionBottom = servicesSection.getBoundingClientRect().bottom;
    //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    //     if (sectionTop <= 0 && sectionBottom >= window.innerHeight) {
    //         servicesSection.style.position = 'sticky';
    //         servicesSection.style.top = '0';
    //         servicesSection.style.width = '100%';
    //     } else if (scrollTop < lastScrollTop && sectionTop > 0) {
    //         servicesSection.style.position = 'relative';
    //     } else if (scrollTop > lastScrollTop && sectionBottom < window.innerHeight) {
    //         servicesSection.style.position = 'relative';
    //     }

    //     lastScrollTop = scrollTop;
    // });


    // Get the buttons that open the modal
//     var openModalButtons = document.querySelectorAll(".open-modal");

//     // When the user clicks on the button, open the modal
//     openModalButtons.forEach(button => {
//         button.onclick = function() {
//             var service = button.getAttribute("data-service");
//             var serviceInfo = serviceData[service];
//             document.getElementById("modal-title").textContent = serviceInfo.title;
//             document.getElementById("modal-duration").textContent = serviceInfo.duration;
//             document.getElementById("modal-description").textContent = serviceInfo.description;
//             modal.style.display = "block";
//         };
//     });

//     // When the user clicks on <span> (x), close the modal
//     closeButton.onclick = function() {
//         modal.style.display = "none";
//     };

//     // When the user clicks anywhere outside of the modal, close it
//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = "none";
//         }
//     };

//     document.addEventListener("DOMContentLoaded", function() {
//         // Get elements
//         const menuLink = document.getElementById("menu-link");
//         const homeSection = document.getElementById("home-section");
//         const menuSection = document.getElementById("menu-section");
    
//         // Menu link click event
//         menuLink.addEventListener("click", function(e) {
//             e.preventDefault();
//             homeSection.classList.toggle("hidden");
//             menuSection.classList.toggle("hidden");
//         });
    
//         // Menu links click event
//         const menuLinks = document.querySelectorAll(".menu-link");
//         menuLinks.forEach(link => {
//             link.addEventListener("click", function() {
//                 homeSection.classList.toggle("hidden");
//                 menuSection.classList.toggle("hidden");
//             });
//         });
//     });
    
    
    
// })
