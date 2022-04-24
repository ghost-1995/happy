"use strict";

const mode = document.querySelector('.mode');

if (mode) {
    const buttonDarkTheme = document.getElementById('button-dark');
    const buttonLightTheme = document.getElementById('button-light');

    if (mode.classList.contains = 'mode_dark') {
        console.log('Dark Theme');
        buttonDarkTheme.setAttribute('disabled', true);
    } else if (mode.classList.contains = 'mode_light') {
        console.log('Light Theme');
        buttonLightTheme.setAttribute('disabled', true);
    }

    buttonLightTheme.addEventListener('click', lightTheme);
    buttonDarkTheme.addEventListener('click', darkTheme);

    function darkTheme(){
        mode.classList.remove('mode_light');
        buttonLightTheme.removeAttribute('disabled');
        buttonDarkTheme.setAttribute('disabled', true);
        mode.classList.add('mode_dark');
        document.querySelector('.mode__headers').classList.add('headers_white');
    }
    function lightTheme(){
        mode.classList.remove('mode_dark');
        buttonDarkTheme.removeAttribute('disabled');
        buttonLightTheme.setAttribute('disabled', true);
        mode.classList.add('mode_light');
        document.querySelector('.mode__headers').classList.remove('headers_white');
    }
}