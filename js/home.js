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

