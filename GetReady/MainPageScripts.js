window.addEventListener('load',function(){
    var Loading = document.getElementById("Overlay");
    this.document.body.removeChild(Loading);
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