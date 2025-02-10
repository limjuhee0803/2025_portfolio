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




