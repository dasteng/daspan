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

document.querySelectorAll('img[data-youtube]').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.add('clicked');

        const msg = document.createElement('div');
        msg.className = 'yt-toast';
        document.body.appendChild(msg);

        let count = 3;
        msg.textContent = `opening a song in ${count}`;

        const countdown = setInterval(() => {
            count--;
            if (count > 0) {
                msg.textContent = `opening a song in ${count}`;
            }
        }, 1000);

        setTimeout(() => {
            clearInterval(countdown);
            window.open(img.dataset.youtube, '_blank');
            img.classList.remove('clicked');
            msg.remove();
        }, 3000);
    });
});