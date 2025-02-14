//реализация корзины
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');
const inceaseButtons = document.querySelectorAll('.increase');
const decreaseButtons = document.querySelectorAll('.decrease');

clearCartButton.addEventListener('click', () => {
    cartItems.innerHTML = '';
    totalPriceElement.textContent = '0';
});

for (let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener('click', () => {
        const productCard = addToCartButtons[i].closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        const quantityControl = productCard.querySelector('.quantity-controls');
        const quantityElement = quantityControl.querySelector('span');
        const quantity = parseInt(quantityElement.textContent);
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${quantity} шт. - ${productPrice}`;
        cartItems.appendChild(cartItem);
        const price = parseFloat(productPrice.replace('Цена: ', ''));
        const totalPrice = parseFloat(totalPriceElement.textContent) + price * quantity;
        totalPriceElement.textContent = totalPrice.toFixed(2);
        quantityElement.textContent = '0';
    });
}   

for (let i = 0; i < inceaseButtons.length; i++) {
    inceaseButtons[i].addEventListener('click', () => {
        const quantityControl = inceaseButtons[i].closest('.quantity-controls');
        const quantityElement = quantityControl.querySelector('span');
        const quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
    });
}   

for (let i = 0; i < decreaseButtons.length; i++) {
    decreaseButtons[i].addEventListener('click', () => {
        const quantityControl = decreaseButtons[i].closest('.quantity-controls');
        const quantityElement = quantityControl.querySelector('span');
        const quantity = parseInt(quantityElement.textContent);
        if (quantity > 0) {
            quantityElement.textContent = quantity - 1;
        }
    });
}   

