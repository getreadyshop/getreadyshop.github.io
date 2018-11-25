function ChangeTShirt()
{
    document.getElementById("Image").src="Photos/heart.jpg";

    document.getElementById("Price").innerText="350 ₴";
};

function ChangeSweatShirt()
{
    document.getElementById("Image").src="Photos/heart1.png";

    document.getElementById("Price").innerText="570 ₴";
};

function ChangeHoodie()
{
    document.getElementById("Image").src="Photos/heart2.png";

    document.getElementById("Price").innerText="670 ₴";
};

function BuyProduct() 
{
    document.getElementById("Overlay").style.display = "block";
};

function CloseOrder() 
{
    document.getElementById("Overlay").style.display = "none";
};

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
