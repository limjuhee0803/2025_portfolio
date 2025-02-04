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

// Lenis + IntersectionObserver 코드 분리
document.addEventListener("DOMContentLoaded", function () {
  const lenis = new Lenis({
    duration: 1.5,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });

  const fadeUpElements = document.querySelectorAll(".fade_up");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -10% 0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeUpElements.forEach((element) => {
    observer.observe(element);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  lenis.on("scroll", () => { /* 필요 시 스크롤 이벤트 추가 */ });
  requestAnimationFrame(raf);
});
