const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5,
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

//personality 마우스 이벤트
const img1 = document.querySelector('.keyword01');
const img2 = document.querySelector('.keyword02');
const img3 = document.querySelector('.keyword03');
const img4 = document.querySelector('.keyword04');
const img5 = document.querySelector('.keyword05');
const img6 = document.querySelector('.keyword06');
const img7 = document.querySelector('.keyword07');
const img8 = document.querySelector('.keyword08');
const img9 = document.querySelector('.keyword09');
const img10 = document.querySelector('.keyword10');

function updatePosition(x, y) {
    img1.style.transform = `translate(${x / 60}px, ${-y / 50}px)`;
    img2.style.transform = `translate(${x / -50}px, ${-y / 100 + 10}px)`;
    img3.style.transform = `translate(${30 - x / 70}px, ${y / 60}px)`;
    img4.style.transform = `translate(${50 - x / 90}px, ${-y / 30}px)`;
    img5.style.transform = `translate(${x / 40}px, ${y / -80}px)`;
    img6.style.transform = `translate(${x / -60}px, ${y / 40}px)`;
    img7.style.transform = `translate(${x / 70}px, ${-y / 90}px)`;
    img8.style.transform = `translate(${x / -80}px, ${y / 30}px)`;
    img9.style.transform = `translate(${x / 50}px, ${y / -70}px)`;
    img10.style.transform = `translate(${x / -90}px, ${y / 20}px)`;
}

addEventListener('mousemove', (evt) => {
  updatePosition(evt.clientX, evt.clientY);
});

// 모바일 터치 대응
addEventListener('touchmove', (evt) => {
  let touch = evt.touches[0]; // 첫 번째 터치 포인트 가져오기
  updatePosition(touch.clientX, touch.clientY);
});


const conceptBtn = document.querySelector('.concept_btn');
const conceptTxt = document.querySelector('.concept_txt');

conceptBtn.addEventListener('click', function () {
  conceptBtn.classList.toggle('active');
});