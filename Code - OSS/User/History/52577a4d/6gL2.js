//реализация корзины
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        const quantity = parseInt(productCard.querySelector('.quantity').textContent);
        const totalPrice = parseFloat(productPrice.replace('Цена: ', '')) * quantity;

        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - ${quantity} шт. - ${totalPrice} руб.`;
        cartItems.appendChild(cartItem);

        const total = parseFloat(totalPriceElement.textContent) + totalPrice;
        totalPriceElement.textContent = total.toFixed(2);
    });
});