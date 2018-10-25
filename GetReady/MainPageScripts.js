var Preloader = document.getElementById('Preloader');

window.addEventListener('load',function() {
    Preloader.style.display = 'none';
});

function ShowAndHideMenu(id) {

    display = document.getElementById(id).style.display;

    if (display == 'none') 
    {

        document.getElementById(id).style.display = 'block';
    } else 
    {

        document.getElementById(id).style.display = 'none';
    }
}
