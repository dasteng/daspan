window.addEventListener('blur', () => {
  document.title = "Dushtin";
});

window.addEventListener('focus', () => {
  document.title = "Dasteng";
});

const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');

document.querySelectorAll('.pictures img').forEach(img => {
    img.addEventListener('click', () => {
        overlayImg.src = img.src;
        overlay.classList.add('active');
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
});