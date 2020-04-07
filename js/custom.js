$(function(){
  $("body").niceScroll({
    cursorcolor:"#f7600e",
    cursorwidth:"5px",
    cursorborder:"none",
  });
/*start silder window */
$('.slider,.overlay').height($(window).height());

/*intro in the center */
$(".slider .intro").css({
    paddingTop:($(window).height()-$(".slider .intro").height())/2-100
  });
  /**trigger to feauters */
  $('.slider .arrow i').click(function(){ 
      $("html , body").animate({
       scrollTop:$('.feauters').offset().top
      },1000);
  });
  /**show more item images */
  $('.show-more').click(function(){
    $(".box-items").fadeIn(2000);
  });
  /** check testimonianls */
  var leftArrow =$('.testi .fa-chevron-left'),
  rightArrow =$('.testi .fa-chevron-right');
 
  function check(){
    if($('.testi-client:first').hasClass('active')) {

      leftArrow.fadeOut() ;
     
    }else{
      leftArrow.fadeIn();
      
   }
   if($('.testi-client:last').hasClass('active')) {

     rightArrow.fadeOut() ;
   
  }else{
    rightArrow.fadeIn();
    
 }
  }
   check();

   $('.testi i').click(function(){
     if($(this).hasClass('fa-chevron-right')){
      $('.testi .active').fadeOut(100,function(){
        $(this).removeClass('active').next('.testi-client').addClass('active').fadeIn();
        check();
     });
    }

    if($(this).hasClass('fa-chevron-left')){
      $('.testi .active').fadeOut(100,function(){
        $(this).removeClass('active').prev('.testi-client').addClass('active').fadeIn();
        check();
     });
    }
     
      });
   

   

});