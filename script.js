$(function () {
  let headerElem = $('header');
  let logo = $('#logo');
  let navMenu = $('#nav-menu');
  let navToggle = $('#nav-toggle');

 $('#properties-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
      nextArrow: '<a href="#" class="slick-arrow slick-next">></a>',
      responsive: [
          {
              breakpoint: 1100,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
              }
          },
          {
              breakpoint: 767,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                //   prevArrow: false
                //   nextArrow: false
              }
          },
          {
              breakpoint: 530,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
              }
          }
      ]
 });

 $('#testimonials-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="slick-arrow slick-prev"><</a>',
      nextArrow: '<a href="#" class="slick-arrow slick-next">></a>'
 });

 navToggle.on('click', () => {
     navMenu.css('right', '0');
 });

 $('#close-flyout').on('click', () => {
      navMenu.css('right', '-100%');
 });

 $(document).on('click', (e) => {
     let target = $(e.target);
     if (!(target.closest('#nav-toggle').length > 0 || target.closest('#nav-menu').length > 0)) {
         navMenu.css('right', '-100%');
     }
 });

 $(document).scroll(() => {
     let scrollTop = $(document).scrollTop();

     if (scrollTop > 0) {
         navMenu.addClass('is-sticky');
         logo.css('color', '#000');
         headerElem.css('background', '#fff');
         navToggle.css('border-color', '#000');
         navToggle.find('.strip').css('background-color', '#000');
     } else {
         navMenu.removeClass('is-sticky');
         logo.css('color', '#fff');
         headerElem.css('background', 'transparent');
         navToggle.css('bordre-color', '#fff');
         navToggle.find('.strip').css('background-color', '#fff');
     }

     headerElem.css(scrollTop >= 200 ? {'padding': '0.5rem', 'box-shadow': '0 -4px 10px 1px #999'} : {'padding': '1rem 0', 'box-shadow': 'none' });
 });

 $(document).trigger('scroll');
});




document.getElementById("whatsappForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const encodedMessage = encodeURIComponent(
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`
      );

      const whatsappNumber = "919892748702"; // ✅ Replace with your own number (without +)
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      window.open(whatsappURL, "_blank");
    });
