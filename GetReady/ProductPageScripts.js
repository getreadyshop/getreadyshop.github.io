function BuyProduct() 
{ 
    alert('Вы купили товар'); 
};

function ChangeTShirt()
{
    document.getElementById("Image").src="https://www.blackspin.gr/image/cache/catalog/product/STAR%20WARS,%20Galactic%20Empire,%20T-Shirt-600x600.png";
};

function ChangeSweatShirt()
{
    document.getElementById("Image").src="https://idolstore.net/wp-content/uploads/2017/07/m-rag-darthvader_1482275289_180-600x600.jpg";
};

function ChangeHoody()
{
    document.getElementById("Image").src="https://howayte.com/wp-content/uploads/2017/11/starwars-black-600x600.png";
};

function BuyProduct() 
{
    document.getElementById("Overlay").style.display = "block";
};

function CloseOrder() 
{
    document.getElementById("Overlay").style.display = "none";
};