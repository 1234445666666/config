//реализация корзины
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart');

clearCartButton.addEventListener('click', () => {
    cartItems.innerHTML = '';
    totalPriceElement.textContent = '0';
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('Цена: ', ''));
        const quantity = parseInt(productCard.querySelector('.quantity').textContent);
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${quantity} шт. - ${productPrice} руб.`;
        cartItems.appendChild(cartItem);
        totalPriceElement.textContent = (parseFloat(totalPriceElement.textContent) + productPrice * quantity).toFixed(2);
    });
});