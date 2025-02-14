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
   addToCartButtons.addEventListener('click', () => {
    const productCard = button.closest('.product-card');
    const productName = productCard.querySelector('h2').textContent;
    const productPrice = productCard.querySelector('p').textContent;
    const productImage = productCard.querySelector('img').src;

    const cartItem = document.createElement('li');
    cartItem.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <span>${productName}</span>
        <span>${productPrice}</span>
        <button class="remove-from-cart">Удалить</button>
    `;

    cartItems.appendChild(cartItem);    
    cartItem.querySelector('.remove-from-cart').addEventListener('click', () => {
        cartItems.removeChild(cartItem);
    });

    let totalPrice = 0;
    cartItems.querySelectorAll('li').forEach(item => {
        const productPrice = parseFloat(item.querySelector('span:nth-child(2)').textContent);
        totalPrice += productPrice;
    });
    totalPriceElement.textContent = totalPrice;

   
   })

});

