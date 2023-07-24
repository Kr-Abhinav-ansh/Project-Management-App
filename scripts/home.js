// this toggleMenu() function will access the menu area and make it appear or disappear whenever clicked
function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if (toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    } else {
        toggleVariable.style.display = 'none';
    }
}