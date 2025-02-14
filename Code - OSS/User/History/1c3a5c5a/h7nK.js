const details = document.querySelectorAll('details');

details.forEach(detail => {
    detail.addEventListener('click', () => {
        details.forEach(d => {
            if (d !== detail) {
                d.removeAttribute('open');
            }
        });
    });
});