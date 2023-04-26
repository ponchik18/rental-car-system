(function ($) {
    "use strict";

    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: true,
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

})(jQuery);

function addReviews(event){
    event.preventDefault(); // Prevent the form from submitting normally
    const form = event.target;
    const formData = new FormData(form); // Get the form data
    const url = form.getAttribute('action');
    fetch(form.action, { // Send an AJAX request to the server
        method: form.method,
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            createMessage(data);
            if (data.status===201){
                const carousel = document.querySelector('.carousel-inner');
                carousel.insertAdjacentHTML('beforeend', `<div class="carousel-item">
                                    <div class="card">
                                        <div class="card-body">
                                            <h5 class="card-title">${formData.get('review-name')}</h5>
                                            <p class="card-text">${formData.get('rating')}</p>
                                            <p class="card-text">${formData.get('comment')}</p>
                                        </div>
                                    </div>
                                </div>`);
                reviewCarouselRoutine();
            }
        })
        .catch(error => {
            console.error(error); // Handle any errors that occur during the AJAX request
        });
}

function makeRental(event){
    event.preventDefault(); // Prevent the form from submitting normally
    const form = event.target;
    console.log(form);
    const formData = new FormData(form); // Get the form data
    console.log(formData);
    const url = form.getAttribute('action');
    fetch(form.action, { // Send an AJAX request to the server
        method: form.method,
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            createMessage(data);
            if(data.status === 201) {
                document.getElementById('request').value = '';
                document.getElementById('count_day').value = '';
                document.getElementById('totalPrice').textContent = '0 руб.';
                document.getElementById('returnDate').textContent = '';
            }
        })
        .catch(error => {
            console.error(error); // Handle any errors that occur during the AJAX request
        });
}

function createMessage(data){
    console.log(data.message);
    document.querySelector('#message').textContent = data.message;
    document.querySelector('#comment').value='';
    document.querySelector('#rating').selectedIndex=0;
    document.querySelector('#overlay-message').style.display = 'block';
    document.querySelector('#modal-message').style.display = 'block';
}


function cancelRental(event){
    event.preventDefault(); // Prevent the form from submitting normally
    const form = event.target;
    console.log(form);
    const formData = new FormData(form); // Get the form data
    console.log(formData);
    const url = form.getAttribute('action');
    fetch(form.action, { // Send an AJAX request to the server
        method: form.method,
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
            document.querySelector('#message').textContent = data.message;
            document.querySelector('#overlay-message').style.display = 'block';
            document.querySelector('#modal-message').style.display = 'block';
            if(data.status === 201) {
                const form = event.target;
                form.parentNode.parentNode.querySelector('.status-type').textContent='Отменена';
                form.remove();
            }
        })
        .catch(error => {
            console.error(error); // Handle any errors that occur during the AJAX request
        });
}