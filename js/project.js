document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth > 768 && !window.lenisInstance) {
      const lenis = new Lenis({
        duration: 4,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
  
      window.lenisInstance = lenis;
  
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
  
      requestAnimationFrame(raf);
    }
  });

document.querySelector(".back_btn").addEventListener("click", function () {
  window.history.back();
});


// 프로그레스 바
window.addEventListener('scroll', function() {
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollNum = window.scrollY;
  const progress = (scrollNum / scrollHeight) * 100;

  const progressBar = document.querySelector('.progress_bar .bar');
  progressBar.style.transform = 'translate3d(' + (-100 + progress) + '%, 0, 0)';
});


// 퍼블리싱 컨텐츠 전환
document.addEventListener("DOMContentLoaded", function() {
  const publishingBoxes = document.querySelectorAll('.publishing_section .publishinh_box');
  const publishingPoints = document.querySelectorAll('.publishing_point li');
  publishingBoxes.forEach(box => {
    box.style.display = 'none'; 
  });
  document.getElementById('publishing01').style.display = 'block'; 

  publishingPoints.forEach(point => {
    point.addEventListener('click', function() {
      const targetId = this.getAttribute('data-content');  
      publishingBoxes.forEach(box => {
        box.style.display = 'none';
      });

      const targetBox = document.getElementById(targetId);
      targetBox.style.display = 'block';

      publishingPoints.forEach(li => {
        li.classList.remove('active_contents');
      });
      this.classList.add('active_contents'); 
    });
  });
});

//프로젝트 스와이퍼
var hobby_swiper = new Swiper(".projectSwiper", {
  slidesPerView: 1.5,
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
