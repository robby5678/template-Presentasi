/*
--------------------------------------------------------

[ INSTA , Javscript ]

  Template Name : INSTA - Responsive Onepage Resume Template
  
  Version       :  1.0 
  
  Author        :  Pixel_Factory
  
  Author URI    :  http://themeforest.net/user/Pixel_Factory
  
  Author Email  : h.nafees.anwar@gmail.com

--------------------------------------------------------
*/

/*  ------------------
    Remove Preloader
    ------------------  */

$(window).load(function () {
		
    $('#preloader').delay(350).fadeOut('slow', function () {
        $('.profile-page, .resume-page, .contact-page, .portfolio-page').hide();
    });
});

$(document).ready(function () {

    'use strict';

    /*  ---------------------
         Homepage Responsive
        ---------------------  */


    function homepageResponsive() {

        // Homepage Main Portions Responsive

        var windowsWidth = $(window).width(),
            windowsHeight = $(window).height();

        if (windowsWidth > windowsHeight) {

            $('.introduction , .menu').css({
                width: '50%',
                height: '100%'
            });

        } else {

            $('.introduction , .menu').css({
                width: '100%',
                height: '50%'
            });

        }

        // Homepage Profile Image Responsive

        var introWidth = $('.introduction').width(),
            introHeight = $('.introduction').height(),
            bgImage = $('.introduction').find('img');

        if (introWidth > introHeight) {

            bgImage.css({
                width: '100%',
                height: 'auto'
            });

        } else {

            bgImage.css({
                width: 'auto',
                height: '100%'
            });

        }

    }

    $(window).on('load resize', homepageResponsive);

    /*  --------------
         Menu Settings
        --------------  */

    // Hide Menu

    $('.menu > div').on('click', function () {

        var introWidth = $('.introduction').width(),
            menuWidth = $('.menu').width();

        $('.introduction').animate({
            left: '-' + introWidth
        }, 1000, 'easeOutQuart');
        $('.menu').animate({
            left: menuWidth
        }, 1000, 'easeOutQuart', function () {
            $('.home-page').css({
                visibility: 'hidden'
            });
        });

    });

    // Show Reletive Page Onclick

    $('.menu div.profile-btn').on('click', function () {
        $('.profile-page').fadeIn(1200);
    });

    $('.menu div.resume-btn').on('click', function () {
        $('.resume-page').fadeIn(1200);
    });

    $('.menu div.portfolio-btn').on('click', function () {
        $('.portfolio-page').fadeIn(1200);
    });

    $('.menu div.contact-btn').on('click', function () {
        $('.contact-page').fadeIn(1200);
    });

    // Close Button, Hide Menu

    $('.close-btn').on('click', function () {
        $('.home-page').css({
            visibility: 'visible'
        });
        $('.introduction, .menu').animate({
            left: 0
        }, 1000, 'easeOutQuart');
        $('.profile-page, .resume-page, .portfolio-page, .contact-page').fadeOut(800);
    });

    /*  --------------------------------
         Maximize Services Items Height
        --------------------------------  */

    function maximizeHeight() {

        var minHeight = 0;

        $('.services').each(function () {

            var maxHeight = $(this).height();

            if (maxHeight > minHeight) {
                minHeight = maxHeight;
            }

        });

        $('.services').height(minHeight);
    }

    maximizeHeight();

    $(window).on('resize', maximizeHeight);

    /*  ----------------------------------------
         Tooltip Starter for Social Media Icons
        ----------------------------------------  */

    $('.intro-content .social-media [data-toggle="tooltip"]').tooltip({
        placement: 'bottom'
    });

    $('.contact-details .social-media [data-toggle="tooltip"]').tooltip();

    /*  ------------
         Pie Charts
        ------------  */

    $(function () {

        var fillColor = $('.footer').css('background-color'); // Get background color of footer to set relevent fill color in pie charts

        // Initiate EasyPieChart

        $('.skill').easyPieChart({
            barColor: fillColor,
            trackColor: '#c6c6c6',
            scaleColor: '#c6c6c6',
            scaleLength: 8,
            lineWidth: 8,
            size: 150,
            lineCap: 'butt'
        });

    });

    /*  -------------------------------
         Filterizer ( for portfolio page )
        -------------------------------  */

    $(function () {
        
        var filterizd = $('.projet-items').filterizr({});


    });

    /*  -------------------------------
         PopUp ( for portfolio page )
        -------------------------------  */

    $(function () {
        $('.show-popup').popup({
            keepInlineChanges: true,
            speed: 500
        });
    });

    /*  -----------------------------------------------------
          OwlCarousel ( for portfolio page : testimonials slider )
        -----------------------------------------------------  */

    $(function () {
        $(".owl-carousel").owlCarousel({
            navigation: false, // Show next and prev buttons
            slideSpeed: 200,
            paginationSpeed: 300,
            singleItem: true
        });
    });


});

/*Buble Text*/
var s = Snap('#svg'), circles = [],
    bg = s.rect(0, 0, 800, 200);

bg.attr({
  'fill': '#00B6F9'
});

var circleGroup = s.group(bg);

// create 200 circles
for(var i=0; i<200; i++) {
  var size = Math.random()*5 + 3,
      cx = Math.random()*800,
      cy = Math.random()*200,
      opacity = Math.random(),
      fill = '#fff',
      counter = Math.random()*360;
      circ = s.circle(cx, cy, size);
  circ.attr({
    'fill': fill,
    'fill-opacity': opacity
  });
  circ.data('xOffset', cx); 
  circ.data('cx', cx);
  circ.data('yOffset', cy); 
  circ.data('cy', cy);
  circ.data('counter', counter); 
  circles.push(circ);
  circleGroup.add(circ);
  
}

var increase = Math.PI * 2 /40,
    text = s.text(10, 130, "CSS");

text.attr({
  'font-size': 120,
  'fill': '#fff'
});

circleGroup.attr({
  mask: text
});

function draw() {
  for(var i=0, l=circles.length; i<l; i++) {
    var circ = circles[i];
    
    if(circ.data('cy') < 0) {
      circ.data('cy', 200);
    } else {
      circ.data('cy', (circ.data('cy')-2));
    }
    circ.data('cx', (circ.data('xOffset') + (50*(Math.sin( circ.data('counter')) / 5))));
    circ.attr({
      cx: circ.data('cx'),
      cy: circ.data('cy')
    });
    
    circ.data('counter',      circ.data('counter')+increase);
  }  
  
}

function animate() {
  draw();
  window.requestAnimationFrame(animate);
}

animate();