const button = document.getElementById('movingButton');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    button.style.left = mouseX + 'px';
    button.style.top = mouseY + 'px';
});
