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

autoSwiper02();
function autoSwiper02() {
    const auto_Sw02 = document.getElementsByClassName("autoSwiper02");
    let arr_slide02 = Array.from(auto_Sw02);
    arr_slide02.forEach((ele, idx, array) => {
        array[idx].classList.add("type02_" + idx);

        new Swiper('.type02_' + idx, {
            effect: 'fade',
            loop: true,
            speed: 300,
            autoplay: {
                delay: 1000,
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

  if (aboutGrayPosition <= 0) {
    h4Elements.forEach((h4) => {
      const randomDelay = Math.random() * 1000; 
      setTimeout(() => {
        h4.classList.add('show');
      }, randomDelay);
    });
  }
});
