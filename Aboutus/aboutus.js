function cartElement(){
  const productNotification = document.getElementById('basket-item-count');
  const basketDiv = document.getElementById('BasketPart');
  productElements = JSON.parse(localStorage.getItem('productBag'));
  productNotification.innerHTML=`${productElements.length}`;
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

//-----------------------------------------------------------

let flag =0;
updateBasket();
updateBasket2();
cartElement();