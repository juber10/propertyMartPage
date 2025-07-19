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
  [ "/Property-Images/1bhk/1-first.png", "/Property-Images/1bhk/second.JPG", "/Property-Images/1bhk/third.JPG", "/Property-Images/1bhk/fourth.JPG", "/Property-Images/1bhk/fifth.JPG", "/Property-Images/1bhk/sixth.JPG", "/Property-Images/1bhk/seventh.JPG"],
  [ "/Property-Images/2bhk/A-first.jpeg", "/Property-Images/2bhk/A-second.jpeg", "/Property-Images/2bhk/A-third.jpeg", "/Property-Images/2bhk/A-fourth.jpeg", "/Property-Images/2bhk/A-fifth.jpeg", "/Property-Images/2bhk/A-sixth.jpeg", "/Property-Images/2bhk/A-seventh.jpeg" ],
  [ "img3-1.jpg", "img3-2.jpg", "img3-3.jpg", "img3-4.jpg", "img3-5.jpg", "img3-6.jpg", "img3-7.jpg", "img3-8.jpg" ],
  [ "img4-1.jpg", "img4-2.jpg", "img4-3.jpg", "img4-4.jpg", "img4-5.jpg", "img4-6.jpg", "img4-7.jpg", "img4-8.jpg" ],
  [ "img5-1.jpg", "img5-2.jpg", "img5-3.jpg", "img5-4.jpg", "img5-5.jpg", "img5-6.jpg", "img5-7.jpg", "img5-8.jpg" ],
  [ "img6-1.jpg", "img6-2.jpg", "img6-3.jpg", "img6-4.jpg", "img6-5.jpg", "/villa 06.jpg", "img6-7.jpg", "img6-8.jpg" ],
  [ "img7-1.jpg", "img7-2.jpg", "img7-3.jpg", "img7-4.jpg", "img7-5.jpg", "img7-6.jpg", "img7-7.jpg", "img7-8.jpg" ],
  [ "img8-1.jpg", "img8-2.jpg", "img8-3.jpg", "img8-4.jpg", "img8-5.jpg", "img8-6.jpg", "img8-7.jpg", "img8-8.jpg" ]
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