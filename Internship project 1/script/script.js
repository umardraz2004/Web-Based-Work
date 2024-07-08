const toggleBtnOpen = document.getElementById('nav-bar-toggle-image');
const toggleBtnClose = document.getElementById('side-bar-toggle-image');
const appear = document.getElementById('toggle-side-bar');
const myLogo = document.getElementById('logo');

myLogo.addEventListener('click', function(e) {
    window.location.href = 'index.html';
});

toggleBtnOpen.addEventListener('click', function(e) {
    appear.style.display = 'block';
});

toggleBtnClose.addEventListener('click', function(e) {
    appear.style.display = 'none';
});