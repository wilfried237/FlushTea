
const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
const ProductDetailGrid= document.getElementById('productDetail-flex');
// const productDetailElement= document.createElement('div');

function addToCart(productId){
    let getproductBag = JSON.parse(localStorage.getItem('productBag')) || [];
    if (!getproductBag.includes(productId)) {
        getproductBag.push(productId);
        localStorage.setItem('productBag', JSON.stringify(getproductBag));
        cartElement();
    }
    else{
        alert(`Product already in cart`);
    }
    
};
function cartElement(){
    const productNotification = document.getElementById('basket-item-count');
const basketDiv = document.getElementById('BasketPart');
productElements = JSON.parse(localStorage.getItem('productBag'));
productNotification.innerHTML=`${productElements.length}`;
}

const isMobile = window.matchMedia("(max-width: 767px)").matches;
if(isMobile){
    ProductDetailGrid.innerHTML=`
            <p class="name-part">${selectedProduct.name}</p>
            <div class="image-part">
                <img src="${selectedProduct.img}" >
            </div>
            <div class="information-part">
                <p class="price-part">&#163;${selectedProduct.price} </p>
                <p class="description-part">${selectedProduct.description.fullDes}</p>
                <button class="btn-info" onClick="addToCart(${selectedProduct.id});"> Add to cart </button>
            </div>
`;
}
else{
    ProductDetailGrid.innerHTML=`
            <div class="image-part">
                <img src="${selectedProduct.img}" >
            </div>
            <div class="information-part">
                <p class="name-part">${selectedProduct.name}</p>
                <p class="view-part">${selectedProduct.views} Views</p>
                <p class="price-part">&#163;${selectedProduct.price} </p>
                <p class="note-part">${selectedProduct.notes} <img src="../image/Gold_Star.svg"> </p>
                <p class="description-part">${selectedProduct.description.fullDes}</p>
                <button class="btn-info" onClick="addToCart(${selectedProduct.id});"> Add to cart </button>
            </div>
`;
}

cartElement();

