(function(){
  var speed = 500; //fade speed
  var autoswitch = true; //auto slider option
  var autoswitch_spedd = 4000; //auto slider speed

  //add initial active class
  $('.slide').first().addClass('active');

  //hide all slides
  $('.slide').hide();

  //show first slide
  $('.active').show();

  //next Handler
  $('#next').on('click',nextSlide);

  //prev Handler
  $('#prev').on('click',prevSlide);

  //Auto slider handler
  if (autoswitch == true) {
    setInterval(nextSlide,autoswitch_spedd);
  }

  //switch to next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed);
  }

 // swirch to prev slide
 function prevSlide(){
   $('.active').removeClass('active').addClass('oldActive');
   if($('.oldActive').is(':first-child')){
     $('.slide').last().addClass('active');
   }else{
     $('.oldActive').prev().addClass('active');
   }
   $('.oldActive').removeClass('oldActive');
   $('.slide').fadeOut(speed);
   $('.active').fadeIn(speed);
 }

})()
