const popup = document.getElementById('popup');
const closeBtn = document.getElementById('exit-button');
const story_one = document.getElementById('open-btn-1');

story_one.addEventListener('click', () => {
    popup.showModal();
    document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
    popup.close();
    document.body.style.overflow = '';
});

popup.addEventListener('click', (event) => {
    const rect = popup.getBoundingClientRect();
    const isClickInside = 
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;

    if (!isClickInside) {
        popup.close();
        document.body.style.overflow = '';
    }
    
});