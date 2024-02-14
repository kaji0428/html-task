(function($) {
    "use strict"; // Start of use strict
    
      $(document).ready(function () {
    $('.second-button').on('click', function () {
      $('.animated-icon').toggleClass('open');
    });
  
  });
    
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 30) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    
  })(jQuery);