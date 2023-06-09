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
function navProduct(id=0){
productDetailDiv.innerHTML=`
    <div class="product-detail-usct">
        <div  class="product-detail-img">
                <div class="product-detail-img-part">
                    <img src="${products[id].img}" alt="">
                </div>
                <div class="product-detail-pricing">
                    <p >&#163;${products[id].price}</p>
                </div> 
                <div class="product-detail-stars">
                    <p>
                        ${products[id].notes}
                    </p>
                    <img src="image/Gold_Star.svg" alt="" class="product-detail-star-img">
                </div>
        </div>
        <div class="product-detail-title-views">
            <div class="product-detail-title">
                <p>${products[id].name}</p> 
            </div>
            <div class="product-detail-views">
            <p> ${products[id].views} </p> 
            </div>
        </div>
        <div class="product-detail-description-basketImg">
            <div class="product-detail-description">
                <p>
                    ${products[id].description.partialDes}
                </p> 
            </div>
            <div class="product-detail-basketImg">
                <button onClick="addToCart(${id})"> <img src="image/shopping-cart2.png" alt="" class="basketImg"> </button>
            </div>
        </div>
        <div class="product-detail-viewbtn">
            <button onClick="viewProducts(${products[id].id});" class="viewProductBtn">View product</button>
        </div>      
    </div>

    `;
}
function viewProducts(ProductId){
    const product = products.find(p=>p.id===ProductId);
    if(product){
        localStorage.setItem('selectedProduct', JSON.stringify(product));
        window.location.href='../OurProduct/productDetails.html';
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
        updateBasket();
        updateBasket2();
    }
    else{
        alert(`Product already in cart`);
    }
    cartElement();
  };


//------------------------------------------------------------------------

const product = [
    {
      id: 0, // type int
      name: "Sandwich", // type char
      img: "../image/sandwich.jpg", // type string
      price: 9.55, //type number
      description: {
        partialDes: "bread with meat and <br> vegetables",
        fullDes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      }, //type char
      notes: 4.5, //type number
      views: "12K", //type string
      quantity:1
    },
    {
      id: 1, // type int
      name: "Hot Milk", // type char
      img: "../image/hotmilk.jpg", // type string
      price: 8.45, //type number
      description: {
        partialDes: "Hot Milk with less <br> sugar",
        fullDes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
       }, //type char
      notes: 4.8, //type number
      views: "12K", //type string
      quantity:1
    },
    {
      id: 2, // type int
      name: "Coffee Ice Cream", // type char
      img: "../image/coffee-ice-cream.jpg", // type string
      price: 9.28, //type number
      description: {
        partialDes: "coffee with ice cream <br> vanilla",
        fullDes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
       }, //type char
      notes: 4.8, //type number
      views: "12K", //type string
      quantity:1
    },
    {
      id: 3, // type int
      name: "Cappucino", // type char
      img: "../image/cappicino.jpg", // type string
      price: 8.91, //type number
      description: {
        partialDes: "Hot Cappucino",
        fullDes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
       }, //type char
      notes: 4.8, //type number
      views: "12K", //type string
      quantity:1
    },
    {
      id: 4, // type int
      name: "Moccacinno", // type char
      img: "../image/mocaccino.jpg", // type string
      price: 8.02, //type number
      description: {
        partialDes: "Hot Moccacino",
        fullDes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
       }, //type char
      notes: 4.8, //type number
      views: "12K", //type string
      quantity:1
    },
    {
      id: 5, // type int
      name: "Waffle Ice Cream", // type char
      img: "../image/wafle-ice-cream.jpg", // type string
      price: 8.99, //type number
      description: {
        partialDes: "waffle with ice cream",
        fullDes: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
       }, //type char
      notes: 4.8, //type number
      views: "12K", //type string
      quantity:1
    },
  ];
localStorage.setItem('Products',JSON.stringify(product));
let counter=1;
const products  = JSON.parse(localStorage.getItem('Products'));
const productDetailDiv = document.getElementById('productDetailDivs');
const isMobile = window.matchMedia("(max-width: 767px)").matches;

if(isMobile){
    setInterval(function() {
        navProduct(counter);
        counter+=1;
        if(counter>=products.length){
            counter=0;
        }
    },7500); 
}


navProduct();
updateBasket();
updateBasket2();