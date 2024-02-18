AOS.init();
window.addEventListener("scroll", (event) => {
   var a=scrollY;
   if(a > 150)
   {
    document.querySelector('.navbar').classList.add('aaaaa')
   }
   else 
   {
    document.querySelector('.navbar').classList.remove('aaaaa')
   }
  });

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });