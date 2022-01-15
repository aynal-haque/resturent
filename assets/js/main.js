(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        $(".hompage-slide").owlCarousel({
            items:1,
            loop:true,
            dots:true,
            nav:false,
            autoplay:false,
        });
        $(".header-top").sticky({topSpacing:0});
        
        $(".smotn-scrol a").bind('click',function(event){
           var $anchor = $(this);
            var headerH = '60';
            
            $('html, body').stop().animate({
               scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            
            event.preventDefault();
        });
      
        $('body').Scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });
        
    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	