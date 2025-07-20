$(function () {
  let headerElem = $('header');
  let logo = $('#logo');
  let navMenu = $('#nav-menu');
  let navToggle = $('#nav-toggle');

 $('#properties-slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="slick-arrow slick-prev">◀</a>',
      nextArrow: '<a href="#" class="slick-arrow slick-next">▶</a>',
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
      prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class="fa-solid fa-arrow-left"></i></a>',
      nextArrow: '<a href="#" class="slick-arrow slick-next"><i class="fa-solid fa-arrow-right"></i></a>'
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
 

     const currentYear = new Date().getFullYear();
  document.getElementById("copyright").textContent = `© ${currentYear} PropertyMart. All rights reserved.`;


// Thumbnail Section
// Each main image has its own array of 8 sub-images
const galleries = [
  [ "Properties-images/1bhk/1.JPG", "Properties-images/1bhk/2.JPG", "Properties-images/1bhk/3.JPG", "Properties-images/1bhk/4.JPG", "Properties-images/1bhk/5.JPG", "Properties-images/1bhk/6.JPG", "Properties-images/1bhk/7.JPG", "Properties-images/1bhk/8.JPG" ], // Property 1(1BHK)
  ["Properties-images/1bhk fully furnished/A.JPG", "Properties-images/1bhk fully furnished/B.JPG", "Properties-images/1bhk fully furnished/C.JPG", "Properties-images/1bhk fully furnished/D.JPG", "Properties-images/1bhk fully furnished/E.JPG", "Properties-images/1bhk fully furnished/F.JPG", "Properties-images/1bhk fully furnished/G.JPG", ], // Property 2 (1BHK Fully furnished)
 [ "Properties-images/1bhk fully loaded/Q1.JPG", "Properties-images/1bhk fully loaded/Q2.JPG", "Properties-images/1bhk fully loaded/Q3.JPG", "Properties-images/1bhk fully loaded/Q4.JPG", "Properties-images/1bhk fully loaded/Q5.JPG", "Properties-images/1bhk fully loaded/Q6.JPG", "Properties-images/1bhk fully loaded/Q7.JPG", "Properties-images/1bhk fully loaded/Q8.JPG" ],// Property 3 (1bhk fully loaded)
  [ "Properties-images/1bhk rent full loaded/W1.JPG", "Properties-images/1bhk rent full loaded/W2.JPG", "Properties-images/1bhk rent full loaded/W3.JPG", "Properties-images/1bhk rent full loaded/W5.JPG", ], // Property 4 (1BHK Rent Fully Loaded)
  [ "Properties-images/2bhk/T1.JPG", "Properties-images/2bhk/T2.JPG", "Properties-images/2bhk/T3.JPG", "Properties-images/2bhk/T4.JPG", "Properties-images/2bhk/T5.JPG", "Properties-images/2bhk/T6.JPG", "Properties-images/2bhk/T7.JPG", "Properties-images/2bhk/T8.JPG",  "Properties-images/2bhk/T9.JPG"], // Property 5 (2BHK)
  [ "Properties-images/3bhk/One.JPG", "Properties-images/3bhk/Two.JPG", "Properties-images/3bhk/Three.JPG", "Properties-images/3bhk/Four.JPG", "Properties-images/3bhk/Five.JPG", "Properties-images/3bhk/Six.JPG", "Properties-images/3bhk/Seven.JPG", "Properties-images/3bhk/Eight.JPG" ],// Property 6 (3BHK)
  [ "Properties-images/1bhk Villa/1-first.png", "Properties-images/1bhk Villa/third.JPG", "Properties-images/1bhk Villa/fourth.JPG", "Properties-images/1bhk Villa/fifth.JPG", "Properties-images/1bhk Villa/sixth.JPG", "Properties-images/1bhk Villa/seventh.JPG",],// Property 7 (1bhk Villa)
  [ "Properties-images/palms 1 1bhk/A1.JPG", "Properties-images/palms 1 1bhk/A2.JPG", "Properties-images/palms 1 1bhk/A3.JPG", "Properties-images/palms 1 1bhk/A4.JPG", "Properties-images/palms 1 1bhk/A5.JPG", "Properties-images/palms 1 1bhk/A6.JPG", "Properties-images/palms 1 1bhk/A7.JPG", "Properties-images/palms 1 1bhk/A8.JPG" ], // Property 8 (5BHK)
  [ "Properties-images/1rk/E1.JPG", "Properties-images/1rk/E2.JPG", "Properties-images/1rk/E3.JPG", "Properties-images/1rk/E4.JPG", "Properties-images/1rk/E5.JPG", "Properties-images/1rk/E6.JPG", "Properties-images/1rk/E7.JPG", "Properties-images/1rk/E8.JPG" ] // Property 9 (5BHK)
];

let currentGallery = [];
let currentIndex = 0;

function openGallery(mainImageIndex) {
  currentGallery = galleries[mainImageIndex];
  currentIndex = 0;
  document.getElementById("modal").style.display = "block";
  updateMainImage();
  loadThumbnails();
}

function closeGallery() {
  document.getElementById("modal").style.display = "none";
}

function changeSlide(step) {
  currentIndex = (currentIndex + step + currentGallery.length) % currentGallery.length;
  updateMainImage();
  highlightActiveThumbnail();
}

function updateMainImage() {
  document.getElementById("main-image").src = currentGallery[currentIndex];
  highlightActiveThumbnail();
}

function loadThumbnails() {
  const thumbBar = document.getElementById("thumbnails");
  thumbBar.innerHTML = "";

  currentGallery.forEach((src, i) => {
    const thumb = document.createElement("img");
    thumb.src = src;
    thumb.className = i === currentIndex ? "active" : "";
    thumb.onclick = () => {
      currentIndex = i;
      updateMainImage();
    };
    thumbBar.appendChild(thumb);
  });
}

function highlightActiveThumbnail() {
  const thumbs = document.querySelectorAll(".thumbnail-bar img");
  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("active", i === currentIndex);
  });
}

JavaScript
function openModal() {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Disable scroll
}

function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = ''; // Enable scroll again
}