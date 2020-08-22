/***Sticky navigation****/

$(document).ready(function() {
  
    $('.js--section-about').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky-nav');
            }
        else{
            $('nav').removeClass('sticky-nav');
        }
    },
       {
  offset: '60px;'                                 
                                        
    });
    
    
    
/******Navigation scroll******/
    
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          }; 
        });
      }
    }
  });
    
    
    /******Navigation scroll******/
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animated fadeIn');
        
    },{
        offset:'50%;'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeIn');
        
    },{
        offset:'50%;'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeIn');
        
    },{
        offset:'50%;'
    });
    $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animated fadeIn');
        
    },{
        offset:'50%;'
    });
    $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animated fadeInLeft');
        
    },{
        offset:'50%;'
    });
    $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animated fadeInRight');
        
    },{
        offset:'50%;'
    });
    
/******POPUP*******/
    
   $(".js--button-1").click(function(){
         $(".js--popup").fadeIn("slow");
       
    });
    $(".js--popup-close").click(function(){
         $(".js--popup").fadeOut("slow");

    }); 
    
      
   $(".js--button-2").click(function(){
         $(".js--popup-1").fadeIn("slow");
       
    });
    $(".js--popup-close").click(function(){
         $(".js--popup-1").fadeOut("slow");

    }); 
    
     $(".js--button-3").click(function(){
         $(".js--popup-2").fadeIn("slow");
       
    });
    $(".js--popup-close").click(function(){
         $(".js--popup-2").fadeOut("slow");

    }); 
    
    $(".js--button-4").click(function(){
         $(".js--popup-3").fadeIn("slow");
       
    });
    $(".js--popup-close").click(function(){
         $(".js--popup-3").fadeOut("slow");

    }); 
    
    
    /*Mobile Navigation*/
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if(icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        
        }
        else
            {
              icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
            }
        
    })
    
   }); 
    
    