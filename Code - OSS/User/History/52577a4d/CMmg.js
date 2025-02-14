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
       
       const cartItem = document.createElement('div');
       cartItem.classList.add('cart-item');

       
       
   })

});

