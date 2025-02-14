document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    let totalPrice = 0;

    // Функция для обновления корзины
    function updateCart() {
        const cartList = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');

        // Очищаем корзину
        cartList.innerHTML = '';

        // Добавляем товары в корзину
        cartItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.quantity} шт. - ${item.price * item.quantity} руб.`;
            cartList.appendChild(li);
        });

        // Обновляем общую стоимость
        totalPriceElement.textContent = totalPrice;
    }

    // Обработчик для кнопок увеличения/уменьшения количества
    document.querySelectorAll('.quantity-controls').forEach(controls => {
        const quantityElement = controls.querySelector('.quantity');
        const decreaseButton = controls.querySelector('.decrease');
        const increaseButton = controls.querySelector('.increase');

        let quantity = 0;

        decreaseButton.addEventListener('click', () => {
            if (quantity > 0) {
                quantity--;
                quantityElement.textContent = quantity;
            }
        });

        increaseButton.addEventListener('click', () => {
            quantity++;
            quantityElement.textContent = quantity;
        });
    });

    // Обработчик для кнопки "Добавить в корзину"
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productCard = button.closest('.product-card');
            const productName = productCard.querySelector('h2').textContent;
            const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('Цена: ', '').replace(' руб.', ''));
            const quantity = parseInt(productCard.querySelector('.quantity').textContent);

            if (quantity > 0) {
                // Добавляем товар в корзину
                const existingItem = cartItems.find(item => item.name === productName);
                if (existingItem) {
                    existingItem.quantity += quantity;
                } else {
                    cartItems.push({ name: productName, price: productPrice, quantity });
                }

                // Обновляем общую стоимость
                totalPrice += productPrice * quantity;

                // Обновляем корзину
                updateCart();
            }
        });
    });
});