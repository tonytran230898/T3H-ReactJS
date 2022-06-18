const pcDropdown = document.querySelector('.pc-dropdown');
const showMenuLv2 = document.getElementById('show-menu-lv2');
const showMegaMenu = document.getElementById('show-menu-lv2.2');
const hideMenuLv2 = document.querySelector('.hide-menu-lv2');

showMenuLv2.addEventListener('mouseenter', e => {
    pcDropdown.classList.add('show-dropdown');
})

showMegaMenu.addEventListener('mouseenter', e => {
    pcDropdown.classList.add('show-dropdown');
})

hideMenuLv2.addEventListener('mousemove', e => {
    pcDropdown.classList.remove('show-dropdown');
})

pcDropdown.addEventListener('mouseleave', e => {
    pcDropdown.classList.remove('show-dropdown');
})
