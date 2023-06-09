function cartElement(){
    const productNotification = document.getElementById('basket-item-count');
  const basketDiv = document.getElementById('BasketPart');
  productElements = JSON.parse(localStorage.getItem('productBag'));
  productNotification.innerHTML=`${productElements.length}`;
}
function removeBag(Id){
const productIds = totalElementBag.map(product => product.id);
const filteredProducts = productIds.filter(product => product != Id);
localStorage.setItem("productBag",JSON.stringify(filteredProducts));
location.reload();
}
function displayElement(){
    totalElementBag.forEach(product=>{
        const productElementFlex= document.createElement('div');
        productElementFlex.className="ProductElement-flex-js";
        productElementFlex.innerHTML=`
    <div class="product-js">
        <button onClick="removeBag(${product.id});"> <img src="images/cancelbutton.png"> </button>
        <img class="product-img" src="${product.img}"> 
        <p class="product-name">${product.name}</p> 
    </div>
    <div class="price-js">&#163;${product.price}</div>
    <div class="quantity-js">
        <img  class="minus-qnt" src="images/minus.png">
        <p   class="quantity-p">${product.quantity}</p>
        <img onclick="incrementValue(${product.id});" class="plus-qnt" src="images/plus.png">
    </div>
    <div class="subtotal-js">&#163;${parseFloat(product.price*product.quantity)}</div>
    `;
    productGrid.appendChild(productElementFlex);
    });
}
function findObjectById(array, id) {
    for(let i=0;i<id.length;i++){
        for(let y= 0; y < array.length; y++) {
            if (array[y].id === id[i]) {
              totalElementBag.push(array[y]);
            }
        }
    }
    return null; // Object with specified id not found
}

//---------------------------------------------------------------------

const productGrid = document.getElementById('productElement-grid');
let productBag = JSON.parse(localStorage.getItem('productBag'));
let Products = JSON.parse(localStorage.getItem('Products'));
let totalElementBag= [];

cartElement();
findObjectById(Products,productBag);
displayElement();
