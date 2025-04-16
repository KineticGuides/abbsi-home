 // Home Slides
 $('.home-slides').owlCarousel({
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  smartSpeed: 750,
  autoHeight: true,
  items: 1,
  navText: [
      "<i class='flaticon-left-chevron'></i>",
      "<i class='flaticon-right-chevron'></i>"
  ],
});
$(".home-slides").on("translate.owl.carousel", function(){
  $(".main-banner-content .sub-title ").removeClass("animated animate__fadeInDown").css("opacity", "0");
  $(".main-banner-content h2").removeClass("animated animate__fadeInUp").css("opacity", "0");
  $(".main-banner-content p").removeClass("animated animate__fadeInUp").css("opacity", "0");
  $(".main-banner-content .slides-btn").removeClass("animated animate__fadeInUp").css("opacity", "0");
});
$(".home-slides").on("translated.owl.carousel", function(){
  $(".main-banner-content .sub-title ").addClass("animated animate__fadeInDown").css("opacity", "1");
  $(".main-banner-content h2").addClass("animated animate__fadeInUp").css("opacity", "1");
  $(".main-banner-content p").addClass("animated animate__fadeInUp").css("opacity", "1");
  $(".main-banner-content .slides-btn").addClass("animated animate__fadeInUp").css("opacity", "1");
});

$(document).on("ready", function () {
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 500,
  });
});

$(document).ready(function () {
  $(".home-slides").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    animateOut: 'fadeOut',
    autoplayTimeout: 1500,
    nav: false,
    dots: false,
    loop: true,
    responsiveClass: true,
  });
});

  // Booking form 
  $("#BookingForm").validate({
    rules: {
        // Define your validation rules here, if any
    },
    messages: {
        // Define custom messages for rules, if any
    }
  });

  // Booking form 2 
  $("#BookingForm2").validate({
      rules: {
          // Define your validation rules here, if any
      },
      messages: {
          // Define custom messages for rules, if any
      } 
  }); 

  // Coming Soon Form 
  $("#ComingSoonForm").validate({
          rules: {
              // Define your validation rules here, if any
          },
          messages: {
              // Define custom messages for rules, if any
          } 
  });

  // Newsletter Form 
  $("#newsletterform").validate({
    rules: {
        // Define your validation rules here, if any
    },
    messages: {
        // Define custom messages for rules, if any
    }
  });

  // Contact Form 
  $("#ContactForm").validate({
    rules: {
        // Define your validation rules here, if any
    },
    messages: {
        // Define custom messages for rules, if any
    } 
  });


  // Search Form 
  $("#SearchForm").validate({
    rules: {
        // Define your validation rules here, if any
    },
    messages: {
        // Define custom messages for rules, if any
    },
    submitHandler: function (form) {
        // Create a Bootstrap 5.3 dismissible alert
        const alertHTML = `
            <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                Message successfully sent!
                <button type="button" class="btn-close contact-msg" data-bs-dismiss="alert" aria-label="Close">
                <i class="fa-solid fa-xmark"></i> 
                </button>
            </div>
        `;

        // Append the alert to a specific container (e.g., above the form)
        $("#SearchForm").before(alertHTML);

        // Optionally clear the form after submission
        form.reset();
    }
  });

  // Get Advice Form 
  $("#GetAdvice").validate({
    rules: {
        // Define your validation rules here, if any
    },
    messages: {
        // Define custom messages for rules, if any
    }
  });
  

  if($('#offcanvasExample').length > 0){
  document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasExample');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("offcanvasbutton").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });
  }

  // offcanvas menu close
  $('.offcanvas-link').on( "click", function(){
    $('.close').click(); 
  });

  //   back to top
  var btn = $('#backtotop');
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function scrollToTop(e){
      window.scrollTo(0, 0);
  });

  // Preloader with Delay
  $(window).on('load', function () {
    setTimeout(function () {
        $('.preloader').addClass('preloader-deactivate');
    }, 0);  
  });

  // dark & light mode
  if($('#btnSwitch').length > 0){
  var togButton = document.getElementById("btnSwitch");
  // console.log('togButton',togButton);
  var currThemeMode = localStorage.getItem("sc_dark");
  if(!currThemeMode || currThemeMode == 'false'){
    document.documentElement.setAttribute("data-theme", "sc_light");
    togButton.innerHTML = "<i class='fa fa-moon navtext-color'></i>";
  }
  else{
    document.documentElement.setAttribute("data-theme", "sc_dark");
    togButton.innerHTML = "<i class='fa fa-sun text-white'></i>";
  }

  togButton.addEventListener("click", toggle);
  function toggle(){
    var currThemeMode = localStorage.getItem("sc_dark");
    if (currThemeMode === null){
      var currThemeMode = "false"
    }
    setTheme(currThemeMode);
  }
  function setTheme(currThemeMode){
    if(currThemeMode == "true" || currThemeMode == true ){
      document.documentElement.setAttribute("data-theme", "sc_light");
      togButton.innerHTML = "<i class='fa fa-moon navtext-color'></i>";
      localStorage.setItem("sc_dark", currThemeMode ? "false" : "true");
    }
    else{
      document.documentElement.setAttribute("data-theme", "sc_dark");
      togButton.innerHTML = "<i class='fa fa-sun text-white'></i>";
      localStorage.setItem("sc_dark", currThemeMode ? "true" : "false");
    }
  }
    $(".radio-button").on('click', function(){
      $(".radio-button").removeClass('active');
      $(this).addClass('active');
    });

    // scroll Page Fixed Navbar
    window.addEventListener("scroll", function () {
      let navbar = document.getElementById("navbar");
      let scrollHeight = window.innerHeight * 0.3; // Adjust scroll trigger

      if (window.scrollY > scrollHeight) {
          navbar.classList.add("fixed");
      } else {
          navbar.classList.remove("fixed");
      }
  });
  }

  // Initialize WOW.js
  new WOW().init();

  //odometer
  document.addEventListener("DOMContentLoaded", function () {
    const odometers = document.querySelectorAll(".odometer");

    odometers.forEach((odometer) => {
        const count = odometer.getAttribute("data-count");
        setTimeout(() => {
            odometer.innerHTML = count;
        }, 500); // Delay before animation starts
    });
  });

	// Review Slides
  if($('#test-slider').length > 0){
    $('#test-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplayHoverPause: true,
      autoplay: true,
      margin: 30,

      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        1200: {
          items: 3,
        }
      }
    });
  }

     
  // Coming Soon Count Time JS
  if($('#timer').length > 0){
    document.addEventListener("DOMContentLoaded", function () {
        const timerElement = document.getElementById("timer");
    
        if (timerElement) {
            const launchDate = new Date("2025-08-01T00:00:00").getTime();
            function updateCountdown() {
                const now = new Date().getTime();
                const timeLeft = launchDate - now;
    
                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
                    document.getElementById("days").innerHTML = `${days}<span class="fs-5 fw-normal">Days</span>`;
                    document.getElementById("hours").innerHTML = `${hours}<span class="fs-5 fw-normal">Hours</span>`;
                    document.getElementById("minutes").innerHTML = `${minutes}<span class="fs-5 fw-normal">Minutes</span>`;
                    document.getElementById("seconds").innerHTML = `${seconds}<span class="fs-5 fw-normal">Seconds</span>`;
                } else {
                    timerElement.innerHTML = "<h3>We Have Launched!</h3>";
                }
            }
    
            setInterval(updateCountdown, 1000);
            // console.log("Countdown started");
            updateCountdown();
        } else {
            console.log("Timer element not found, countdown not started");
        }
    });
  } 
    // FAQ Accordion
    $(function() {
      $('.accordion').find('.accordion-title').on('click', function(){
          $(this).toggleClass('active');
          $(this).next().slideToggle('fast');
          $('.accordion-content').not($(this).next()).slideUp('fast');
          $('.accordion-title').not($(this)).removeClass('active');		
      });
    });

  // current year code
  $(document).ready(function () {
    // Get the current year
    const currentYear = new Date().getFullYear();
    // Set the year in the target element
    $("#currentYear").text(currentYear);
  });

  window.onload = function () {
    var successMessage = localStorage.getItem("successMessage");
    var errorMessage = localStorage.getItem("emailfailed");
    var news_successMessage = localStorage.getItem("news_successMessage");
    var news_errorMessage = localStorage.getItem("news_emailfailed");
    var modal_successMessage = localStorage.getItem("modal_successMessage");
    var modal_errorMessage = localStorage.getItem("modal_emailfailed");

    if (successMessage) {
        $("#formstatusmessage")
            .removeClass("d-none")
            .addClass("d-flex alert alert-dismissible align-items-center alert-success") // Bootstrap success alert
            .html('<i class="fa fa-check-circle pe-3 text-success"></i> Your Form Has Been Submitted Successfully. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
        
        localStorage.removeItem("successMessage");
        history.replaceState(null, null, window.location.pathname);
    } 
    else if (errorMessage) {
        $("#formstatusmessage")
            .removeClass("d-none")
            .addClass("d-flex alert alert-dismissible align-items-center alert-danger") // Bootstrap error alert
            .html('<i class="fa-solid fa-circle-xmark pe-3 text-danger"></i> Failed to Send Your Form. Please Try Again Later. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
        
        localStorage.removeItem("emailfailed");
        history.replaceState(null, null, window.location.pathname);
    }
    else if (news_successMessage) {
      $("#newsmessage")
          .removeClass("d-none")
          .addClass("d-flex alert alert-dismissible align-items-center alert-success mt-3") // Bootstrap success alert
          .html('<i class="fa fa-check-circle pe-3 text-success"></i> Newsletter Subscribed Successfully. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');
      
      localStorage.removeItem("news_successMessage");
      history.replaceState(null, null, window.location.pathname);
    } 
    else if (news_errorMessage) {
        $("#newsmessage")
            .removeClass("d-none")
            .addClass("d-flex alert alert-dismissible align-items-center alert-danger mt-3") // Bootstrap error alert
            .html('<i class="fa-solid fa-circle-xmark pe-3 text-danger"></i> Failed to Subscribe. Please Try Again Later. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>'); 
        localStorage.removeItem("news_errorMessage");
        history.replaceState(null, null, window.location.pathname);
    }
    // For Modal
    else if (window.location.hash === "#appointmentform") { 
      if(modal_successMessage){
        $("#modalform_message")
        .removeClass("d-none")
        .addClass("d-flex alert alert-dismissible align-items-center alert-success mt-3") // Bootstrap success alert
        .html('<i class="fa fa-check-circle pe-3 text-success"></i> Appointment Booked Successfully. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');  
        $("button[data-bs-dismiss='modal']").on('click', function(){
          $("#modalform_message").removeClass("d-flex").addClass("d-none");
        });
      }
      else if(modal_errorMessage){
        $("#modalform_message")
        .removeClass("d-none")
        .addClass("d-flex alert alert-dismissible align-items-center alert-danger mt-3") // Bootstrap error alert
        .html('<i class="fa-solid fa-circle-xmark pe-3 text-danger"></i> Appointment Booking Failed, Please Try Again Later. <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>');  
        $("button[data-bs-dismiss='modal']").on('click', function(){
          $("#modalform_message").removeClass("d-flex").addClass("d-none");
        });
      }
      var myModal = new bootstrap.Modal(document.getElementById("requestQuotes"));
      myModal.show();
      localStorage.removeItem("modal_successMessage");
      localStorage.removeItem("modal_emailfailed");
      history.replaceState(null, null, window.location.pathname);
    } 
};