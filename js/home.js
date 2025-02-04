// 컨텐츠 전환 로직
const firstInterface = document.querySelector('.first_interface');
const mainInterface = document.querySelector('.main_interface');

firstInterface.addEventListener('click', () => {
  firstInterface.style.transform = 'translateX(-100%)';
  mainInterface.style.transform = 'translateX(0)';
});

const header = document.querySelector('header');
const projectSection = document.querySelector('.project');

window.addEventListener('scroll', () => {
  const projectTop = projectSection.getBoundingClientRect().top;

  if (projectTop <= 0) {
    header.classList.add('scroll-active');
  } else {
    header.classList.remove('scroll-active');
  }
});


//캐릭터
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