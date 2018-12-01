function ChangeTShirt() {
    document.getElementById("Image").src = "https://www.blackspin.gr/image/cache/catalog/product/STAR%20WARS,%20Galactic%20Empire,%20T-Shirt-600x600.png";

    document.getElementById("Price").innerText = "350 ₴";
};

function ChangeSweatShirt() {
    document.getElementById("Image").src = "https://idolstore.net/wp-content/uploads/2017/07/m-rag-darthvader_1482275289_180-600x600.jpg";

    document.getElementById("Price").innerText = "570 ₴";
};

function ChangeHoodie() {
    document.getElementById("Image").src = "https://swoopstore.co.uk/wp-content/uploads/Star-Wars-Darth-Vader-Hoodie-02-600x600.jpg";

    document.getElementById("Price").innerText = "670 ₴";
};

function BuyProduct() {
    document.getElementById("Overlay").style.display = "block";
};

function CloseOrder() {
    document.getElementById("Overlay").style.display = "none";
};

function ShowAndHideMenu(id) {
    display = document.getElementById(id).style.display;

    if (display == 'none') {

        document.getElementById(id).style.display = 'block';
    } else {

        document.getElementById(id).style.display = 'none';
    }
}
