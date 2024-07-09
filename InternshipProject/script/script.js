const toggleBtnOpen = document.getElementById('nav-bar-toggle-image');
const toggleBtnClose = document.getElementById('side-bar-toggle-image');
const appear = document.getElementById('toggle-side-bar');
const myLogo = document.getElementById('logo');

myLogo.addEventListener('click', function(e) {
    window.location.href = 'index.html';
});

toggleBtnOpen.addEventListener('click', function(e) {
    appear.style.display = 'block';
    appear.classList.remove('active');
});

toggleBtnClose.addEventListener('click', function(e) {
    setTimeout(()=> {
        appear.style.display = 'none';
    }, 900)
    appear.classList.add('active');
});

const listItems = document.querySelectorAll('li');
listItems.forEach(function (listItem) {
    listItem.addEventListener('click', function (e) {
        appear.style.display = 'none';
    });
});