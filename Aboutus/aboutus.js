const productNotification = document.getElementById('basket-item-count');
const basketDiv = document.getElementById('BasketPart');
productElements = JSON.parse(localStorage.getItem('productBag'));
productNotification.innerHTML=`${productElements.length}`;