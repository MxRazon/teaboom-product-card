document.addEventListener('DOMContentLoaded', () => {
    const packingButtons = document.querySelectorAll('.packing-btn');
    const skuElement = document.getElementById('product-sku');
    const currentPriceElement = document.getElementById('current-price');
    const oldPriceElement = document.getElementById('old-price');
    const buyButton = document.querySelector('.product-card__buy-btn');

    packingButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            packingButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const newSku = button.getAttribute('data-sku');
            const newPrice = button.getAttribute('data-price');
            const newOldPrice = button.getAttribute('data-old-price');

            skuElement.textContent = newSku;
            currentPriceElement.textContent = `${newPrice} ₽`;
            
            if (newOldPrice) {
                oldPriceElement.textContent = `${newOldPrice} ₽`;
                oldPriceElement.style.display = 'inline'; // На случай, если бы были товары без скидки
            } else {
                oldPriceElement.style.display = 'none';
            }
            
            currentPriceElement.style.animation = 'none';
            setTimeout(() => {
                currentPriceElement.style.animation = 'fadeIn 0.3s ease-in-out';
            }, 10);
        });
    });

    buyButton.addEventListener('click', () => {
        const activeWeight = document.querySelector('.packing-btn.active').textContent;
        buyButton.style.background = '#2e7d32';
        buyButton.querySelector('span').textContent = 'Добавлено!';
        
        setTimeout(() => {
            buyButton.style.background = '';
            buyButton.querySelector('span').textContent = 'В корзину';
        }, 2000);
    });
});
