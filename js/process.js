document.querySelector('.airdrop').addEventListener('click', function() {
    document.querySelector('.overview').scrollIntoView({
      behavior: 'smooth',
      block: 'start' 
    });
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