const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.3,
    spaceBetween: 10,
    breakpoints: {
        768: {
            slidesPerView: 6,
        }
    }
});

// Function to display the selected content
function showContent(tabId) {
    // Hide all contents
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => content.style.display = 'none');

    // Show the selected content
    const selectedContent = document.getElementById(tabId + '-content');
    if (selectedContent) {
        selectedContent.style.display = 'block';
    }

    // Change the active state of the tabs
    const allSlides = document.querySelectorAll('.sidebar .swiper-slide');
    allSlides.forEach(slide => {
        slide.classList.remove('active');
        
        // Reset image to original state
        const img = slide.querySelector('img');
        if (img) {
            img.src = './asset/image/folder_old.png';
        }
    });

    const activeSlide = document.querySelector(`[data-content="${tabId}"]`);
    if (activeSlide) {
        activeSlide.classList.add('active');
        
        // Change the image to the active state
        const img = activeSlide.querySelector('img');
        if (img) {
            img.src = './asset/image/folder_active.png';
        }
    }
}

// Function to handle swiper slide click
document.querySelectorAll('.sidebar .swiper-slide').forEach(slide => {
    slide.addEventListener('click', () => {
        const contentId = slide.getAttribute('data-content');
        showContent(contentId);
    });
});


showContent('hobby');

//sticky 되었을 때 클래스 추가
/*
document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.sidebar');
  
    window.addEventListener('scroll', function () {
      const computedStyle = getComputedStyle(sidebar);
      const targetOffset = window.innerHeight * 0.05; // 5% 기준
      const currentOffset = sidebar.getBoundingClientRect().top;
  
      // sticky 상태 + 근사값 비교로 클래스 추가
      if (computedStyle.position === 'sticky' && Math.abs(currentOffset - targetOffset) < 1) {
        sidebar.classList.add('change_color');
      } else {
        sidebar.classList.remove('change_color');
      }
    });
  });
*/
  


//상품 스와이퍼
var hobby_swiper = new Swiper(".hobbySwiper", {
    slidesPerView: 2.5,
    spaceBetween: 10,
    slideToClickedSlide : true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 4.5,
        spaceBetween: 20.
      }
  }
});