
        function calculateInterest() {
            const amount = parseFloat(document.getElementById('amount').value);
            const rate = parseFloat(document.getElementById('rate').value);
            const term = parseFloat(document.getElementById('term').value);

            if (isNaN(amount) || isNaN(rate) || isNaN(term)) {
                alert('Пожалуйста, введите корректные числовые значения');
                return;
            }

            const interest = (amount * rate * (term / 12)) / 100;
            const total = amount + interest;

            document.getElementById('result').style.display = 'block';
            document.getElementById('totalAmount').textContent = 
                total.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
            document.getElementById('profit').textContent = 
                interest.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });
        }