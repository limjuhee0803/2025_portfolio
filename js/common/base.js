// 새로고침 시 가장 위로 스크롤
/*
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});
*/

//부드러운 스크롤
document.addEventListener("DOMContentLoaded", function () {
  if (!window.lenisInstance) {
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

//up 버튼
document.addEventListener("DOMContentLoaded", function () {
  const upButton = document.querySelector('.up');

  if (upButton) {
    upButton.addEventListener('click', function () {
      if (window.lenisInstance) {
        window.lenisInstance.scrollTo(0, { duration: 2 });
      }
    });
  }
});


// 날짜와 시간 업데이트 함수
function updateTimeAndDate() {
  const now = new Date();

  // 시간 형식 (12시간제)
  let hours = now.getHours();
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let period = hours >= 12 ? '오후' : '오전';

  // 24시간제 -> 12시간제 변환
  hours = hours % 12;
  hours = hours ? hours : 12;
  const timeString = `${period} ${hours}:${minutes}`;

  // 날짜 형식
  const months = ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"];
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const month = months[now.getMonth()];
  const day = now.getDate();
  const weekday = weekdays[now.getDay()];
  const dateString = `${month} ${day}일 ${weekday}요일`;

  // HTML 요소 업데이트
  document.getElementById("current-time").textContent = timeString;
  document.getElementById("current-date").textContent = dateString;
}

// 시간/날짜 갱신 인터벌 설정
setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();


//스크롤 이벤트
const fadeUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      fadeUpObserver.unobserve(entry.target); // 이미 보인 요소는 다시 감지하지 않음
    }
  });
}, { 
  threshold: 0.5, // 요소가 절반 이상 보일 때 감지
  rootMargin: '0px 0px -50px 0px' // 하단 여백 조정
});

document.querySelectorAll('.fade_up').forEach(el => fadeUpObserver.observe(el));



//푸터가 시작되면 메뉴바가 사라짐
/*
const menuBar = document.querySelector('.menu-bar');
const footer = document.querySelector('footer');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      menuBar.style.opacity = '0';
      menuBar.style.visibility = 'hidden';
      menuBar.style.pointerEvents = 'none';
    } else {
      menuBar.style.opacity = '1';
      menuBar.style.visibility = 'visible';
      menuBar.style.pointerEvents = 'auto';
    }
  });
}, { threshold: 0.1 });

observer.observe(footer);
*/

// main_interface의 끝에서 5% 남았을 때 메뉴바 사라지게
/*
window.addEventListener('scroll', function() {
  const mainInterface = document.querySelector('.main_interface');
  const menuBar = document.querySelector('.menu-bar');
  const mainInterfaceHeight = mainInterface.offsetHeight;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition >= mainInterface.offsetTop + mainInterfaceHeight * 0.95) {
    menuBar.style.transition = 'opacity 0.3s ease-out'; // 부드러운 전환 추가
    menuBar.style.opacity = 0;
  } else {
    menuBar.style.transition = 'opacity 0.3s ease-in'; // 부드러운 전환 추가
    menuBar.style.opacity = 1;
  }
});
*/