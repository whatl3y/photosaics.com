(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict

// form submittal
(function () {
  window.addEventListener("DOMContentLoaded", function () {
      toastr.options.positionClass = "toast-bottom-right";

      // get the form elements defined in your form HTML above

      var form = document.getElementById("signup-form");

      // Success and Error functions for after the form is submitted

      function success() {
          form.reset();
          toastr.success(`Successfully signed you up!`);
      }

      function error() {
          toastr.error(`There was an error submitting your e-mail.`);
      }

      // handle the form submission event

      form.addEventListener("submit", function (ev) {
          ev.preventDefault();
          var data = new FormData(form);
          ajax(form.method, form.action, data, success, error);
      });
  });

  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
      var xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = function () {
          if (xhr.readyState !== XMLHttpRequest.DONE) return;
          if (xhr.status === 200) {
              success(xhr.response, xhr.responseType);
          } else {
              error(xhr.status, xhr.response, xhr.responseType);
          }
      };
      xhr.send(data);
  }

  // // <!-- Global site tag (gtag.js) - Google Analytics -->
  // window.dataLayer = window.dataLayer || [];
  // function gtag() {
  //     dataLayer.push(arguments);
  // }
  // gtag("js", new Date());
  // gtag("config", "UA-169004081-1");
})();