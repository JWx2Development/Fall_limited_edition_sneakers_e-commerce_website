/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Increase number in input element

function increaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

// Decrease number in input element

function decreaseValue() {
    let value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
}

// Open cart box when clicked on cart img

function viewCart() {
    let x = document.getElementById("cart");
    if (x.className === "cart") {
        x.className += " open_cart";
    } else {
        x.className = "cart";
    }
};

function addProducts() {

    // Array of elements that make up the product

    var productsForSale = [
        [src = 'images/image-product-1-thumbnail.jpg', 'Fall Limited Edition Sneakers', 125.00, '', 'Remove']
    ];
    var totalValue = document.getElementById('number').value * 125.00;
    var inputValue = document.getElementById('number').value;
    var main = document.getElementById('products');


    // All product elements to be addedd to cart

    var productListItem = document.createElement('li');
    var productImg = document.createElement('img');
    var productTitle = document.createElement('h2');
    var productPrice = document.createElement('h4');
    var productAmount = document.createElement('p');
    var productTotal = document.createElement('p');
    var productDelete = document.createElement('button');
    productAmount.className = 'amountSelected';
    productTotal.className = 'totalAmountToPay';
    productDelete.className = 'deleteProduct';

    // Adding a click function to the remove button created, removing the selected product.//

    productDelete.onclick = function deleteProduct() {
        var x = document.getElementsByTagName('li')
        x[0].remove();

        // Show empty cart tage when cart is empty
        let addEmptyTag = document.getElementById('emptyCartTag')
        addEmptyTag.style.display = 'block';

        // Make the cart number revert back to 0 when product removed
        let deleteCartAmount = document.getElementById('cart_number');
        deleteCartAmount.innerHTML = 0;

    };

    // Push product elements into HTML

    main.appendChild(productListItem);
    productListItem.appendChild(productImg);
    productListItem.appendChild(productTitle);
    productListItem.appendChild(productPrice);
    productListItem.appendChild(productAmount);
    productListItem.appendChild(productTotal);
    productListItem.appendChild(productDelete);

    // Edit pushed element info from array

    productImg.src = (productsForSale?.[0]?.[0]);
    productTitle.innerHTML = (productsForSale?.[0]?.[1]);
    productPrice.innerHTML = '$' + (productsForSale?.[0]?.[2]);
    productAmount.innerHTML = 'X ' + (inputValue);
    productTotal.innerHTML = '$' + (totalValue);
    productDelete.innerHTML = (productsForSale?.[0]?.[4]);

    var removeEmptyTag = document.getElementById('emptyCartTag')
    removeEmptyTag.style.display = 'none';

    let cartAmount = document.getElementById('cart_number');
    cartAmount.innerHTML = inputValue;

};

