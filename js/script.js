
//smooth scroll
$(document).ready(function () {
// $(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      console.log(target);
      console.log(target.offset());
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          //subtracted 73 which is height of the navbar(including padding/margin) so that it scrolls to the precise position
          scrollTop: (target.offset().top - 73)
        }, 1000);
        return false;
      }
    }
  });
  // Transition effect for navbar
        $(window).scroll(function() {
          // checks if window is scrolled more than 250px, adds/removes solid class
          if($(this).scrollTop() > 250) {
              $('.navbar').addClass('solid');
          } else {
              $('.navbar').removeClass('solid');
          }
        });

    //code for parallax effect
    $('.overlay').parallax({imageSrc: '../img/beach3.jpg', position: "top"});
    $('.workParallax').parallax({imageSrc: '../img/beach4.jpg', position: "bottom"});
}); //end of document.ready
