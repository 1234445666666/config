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

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h2').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        const productImage = productCard.querySelector('img').src;

        const cartItem = document.createElement('li');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${productImage}" alt="${productName}">
            <div>
                <h3>${productName}</h3>
                <p>${productPrice}</p>
            </div>
        `;
        cartItems.appendChild(cartItem);

        const quantityElement = productCard.querySelector('.quantity');
        const quantity = parseInt(quantityElement.textContent);
        quantityElement.textContent = quantity + 1;
        const totalPrice = parseFloat(totalPriceElement.textContent) + parseFloat(productPrice.replace('Цена: ', ''));
        totalPriceElement.textContent = totalPrice.toFixed(2);
    });

});

