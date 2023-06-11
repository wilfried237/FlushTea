function viewProducts(ProductId){
    const product = products.find(p=>p.id===ProductId);
    if(product){
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href='productDetails.html';
    }
    else{
        alert('Product not found');
    }
};

function addToCart(productId){
  let getproductBag = JSON.parse(localStorage.getItem('productBag')) || [];
  if (!getproductBag.includes(productId)) {
      getproductBag.push(productId);
      localStorage.setItem('productBag', JSON.stringify(getproductBag));
  }
  else{
      alert(`Product already in cart`);
  }
  cartElement();
};
function cartElement(){
  const productNotification = document.getElementById('basket-item-count');
const basketDiv = document.getElementById('BasketPart');
productElements = JSON.parse(localStorage.getItem('productBag'));
productNotification.innerHTML=`${productElements.length}`;
}
function changeIcon(){
    const burgerImgSource = document.getElementById('burger-img-source');
    const navigationSectionHeader = document.getElementById('header-navigation-section');
    const url1 = '../image/burgerMenu.png';
    const url2 = '../image/icons8-cross-50.png';
    
    if(flag==0){
        burgerImgSource.src = url2;
        navigationSectionHeader.style.display= 'flex';
        return flag=1;
    }
    else{
        burgerImgSource.src = url1;
        navigationSectionHeader.style.display= 'none';
        return flag=0;
    }
}
function updateBasket(){
    const productNotification = document.getElementById('basket-item-count');
    const basketDiv = document.getElementById('BasketPart');
    productElements = JSON.parse(localStorage.getItem('productBag'));
    productNotification.innerHTML=`${productElements.length}` || "0";
}
function updateBasket2(){
    const productNotification = document.getElementById('basket-item-count2');
    const basketDiv = document.getElementById('BasketPart');
    productElements = JSON.parse(localStorage.getItem('productBag'));
    productNotification.innerHTML=`${productElements.length}` || "0";
}
//------------------------------------------------------------------
let flag =0;
const products  = JSON.parse(localStorage.getItem('Products'));
const menuSectionGrid = document.getElementById("menu-section-grid");
products.forEach((product) => {
  // main body element
  const menuSectionElement = document.createElement("div");
  menuSectionElement.className = "menu-section-element";

  menuSectionElement.innerHTML = `
<div class="menu-section-img-part">
    <img id="img" src="${product.img}" alt="">
    <div class="menu-rating glass-effect">
        <p id="note">${product.notes}</p>
            <img src="../image/Gold_Star.svg" alt="">
    </div>
    <div class="menu-price">
        <p id="price">&#163;${product.price}</p>
    </div>
    </div>
    <div class="menu-section-nameView">
        <div class="menu-section-name">
            <p id="name">${product.name}</p>
        </div>
        <div class="menu-section-view">
            <p id="views">${product.views}</p>
            </div>
        </div>
    <div class="menu-section-description-button">
        <div class="menu-section-description">
            <p id="description">${product.description.partialDes}</p>
        </div>
        <div class="menu-section-button-img">
            <button onClick="addToCart(${product.id})" class="menu-section-button">
                <img class="menu-section-img" src="../image/shopping-cart2.png" alt="">
            </button>
        </div>
    </div>
    <div class="menu-btn">
    <button onClick="viewProducts(${product.id});" >View Product</button>
    </div>
</div>
    `;
  menuSectionGrid.appendChild(menuSectionElement);
});
updateBasket();
updateBasket2();
cartElement();