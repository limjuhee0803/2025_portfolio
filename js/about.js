// Initialize Swiper for mobile
const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5, // 2.5개 슬라이드 보여주기
    spaceBetween: 10, // 슬라이드 간격
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
    const allTabs = document.querySelectorAll('.tab');
    allTabs.forEach(tab => tab.classList.remove('active'));

    const activeTab = document.querySelector(`[data-tab="${tabId}"]`);
    if (activeTab) {
        activeTab.classList.add('active');
    }
}

// Function to handle swiper slide click
document.querySelectorAll('.swiper-slide').forEach(slide => {
    slide.addEventListener('click', () => {
        const contentId = slide.getAttribute('data-content');
        showContent(contentId);
    });
});

// Default content
showContent('hobby');