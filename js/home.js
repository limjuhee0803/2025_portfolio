// 컨텐츠 전환 로직
/*
const firstInterface = document.querySelector('.first_interface');
const mainInterface = document.querySelector('.main_interface');

firstInterface.addEventListener('click', () => {
  firstInterface.style.transform = 'translateX(-100%)';
  mainInterface.style.transform = 'translateX(0)';
});
*/


//heade와 .up 버튼 컬러 변경
const header = document.querySelector('header');
const projectSection = document.querySelector('.project');
const upButton = document.querySelector('.up svg'); // .up 안의 svg 요소

window.addEventListener('scroll', () => {
  const projectTop = projectSection.getBoundingClientRect().top;

  // 프로젝트 영역이 화면에 닿으면 색상 변경
  if (projectTop <= 0.1) {
    header.classList.add('scroll-active');
    if (upButton) {
      upButton.style.fill = '#fff';
    }
  } else {
    header.classList.remove('scroll-active');
    if (upButton) {
      upButton.style.fill = '#777777';
    }
  }
});


//캐릭터
/*
const eyes = document.querySelectorAll(".eye");
let isMouseMoveEventActive = false;

document.addEventListener("mousemove", (event) => {
  if (!isMouseMoveEventActive) {
    requestAnimationFrame(() => {
      eyes.forEach((eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;

        const deltaX = event.clientX - eyeX;
        const deltaY = event.clientY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);

        const moveX = Math.cos(angle) * 10;
        const moveY = Math.sin(angle) * 10;

        eye.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
      isMouseMoveEventActive = false;
    });
    isMouseMoveEventActive = true;
  }
});
*/

//오토 스와이퍼
autoSwiper();
function autoSwiper(){
    const auto_Sw = document.getElementsByClassName("autoSwiper");
    let arr_slide = Array.from(auto_Sw);
    arr_slide.forEach((ele, idx, array) => {
        array[idx].classList.add("type" + idx);

        const Swiper_sub01 = new Swiper( '.type' + idx, {
            effect : 'fade',
            loop : true,
            speed: 500,
            autoplay: {
                delay: 2000,
            },
        });
    });
}

//말풍선 효과
window.addEventListener('scroll', function() {
  const aboutGray = document.querySelector('.about_gray');
  const aboutDetail = document.querySelector('.about_detail');
  const h4Elements = aboutDetail.querySelectorAll('h4');

  const aboutGrayPosition = aboutGray.getBoundingClientRect().top;

  // about_gray가 화면 상단에 닿으면
  if (aboutGrayPosition <= 0) {
    h4Elements.forEach((h4) => {
      // 지연 시간을 더 빠르게 (0ms ~ 1000ms 사이로 설정)
      const randomDelay = Math.random() * 1000; // 0ms ~ 1000ms 사이의 랜덤 값

      setTimeout(() => {
        h4.classList.add('show');
      }, randomDelay);
    });
  }
});


