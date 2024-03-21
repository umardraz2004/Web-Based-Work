const toggleBtn = document.querySelector('#icon');
const dropDownMenu = document.querySelector('.pop-up');
toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
}