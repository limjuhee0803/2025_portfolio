//프로젝트 스와이퍼
var hobby_swiper = new Swiper(".workSwiper", {
    slidesPerView: 1.6,
    spaceBetween: 20,
    slideToClickedSlide : true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20.
      }
    }
});

//tab_bar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tab_bar a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        if (window.innerWidth > 768 && window.lenisInstance) {
          // PC에서는 Lenis 사용
          window.lenisInstance.scrollTo(targetElement, { duration: 1.5 });
        } else {
          // 모바일에서는 기본 브라우저 동작
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

  