$(document).ready(function() {
    // Array of visited countries (using SVG path IDs)
    const visitedCountries = ['greece', 'france', 'italy'];

    // Load the SVG map and inject it into the page
    $.get('/assets/svg/world-map.svg', function(data) {
        const svgContent = $(data).find('svg');
        $('#world-map').append(svgContent);

        // Add 'visited' class to corresponding countries in the SVG
        visitedCountries.forEach(countryId => {
            $(`#${countryId}`).addClass('visited');
        });

        // Add hover effect and click functionality to countries
        $('.country').on('mouseenter', function() {
            if ($(this).hasClass('visited')) {
                $(this).attr('data-original-fill', $(this).css('fill'));
                $(this).css('fill', 'var(--vintage-brown)');
            }
        }).on('mouseleave', function() {
            if ($(this).hasClass('visited')) {
                $(this).css('fill', $(this).attr('data-original-fill'));
            }
        }).on('click', function() {
            const countryId = $(this).attr('id');
            if (visitedCountries.includes(countryId)) {
                window.location.href = `/countries/${countryId}.html`;
            }
        });

    }, 'xml');

    // Smooth scroll for internal links
    $('a[href^="#"]').on('click', function(event) {
        const target = $(this.hash);
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70 // Adjust for fixed navbar
            }, 800);
        }
    });

    // Handle fixed navbar background change on scroll
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
});

