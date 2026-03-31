const modal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImage');
const modalCaption = document.getElementById('modalCaption');
const closeBtn = document.querySelector('.close');

const manualImages = document.querySelectorAll('.manual-img');

manualImages.forEach((img) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImg.src = img.src;
        modalCaption.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


