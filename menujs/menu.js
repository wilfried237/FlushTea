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
                    <p class="glass-effect" >&#163;${products[id].price}</p>
                </div> 
                <div class="product-detail-stars glass-effect">
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

function changeIcon(){
    const burgerImgSource = document.getElementById('burger-img-source');
    const navigationSectionHeader = document.getElementById('header-navigation-section');
    const url1 = 'image/burgerMenu.png';
    const url2 = 'image/icons8-cross-50.png';
    
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

//------------------------------------------------------------------------

const product = [
    {
      id: 0, // type int
      name: "Sandwich", // type char
      img: "../image/sandwich.jpg", // type string
      price: 9.55, //type number
      description: {
        partialDes: "bread with meat and <br> vegetables",
        fullDes: "At our coffee shop, we offer a delicious sandwich that is perfect for a quick and satisfying meal. Our sandwich is made with freshly baked bread and filled with a variety of high-quality ingredients. You can choose from options like roasted turkey, ham, or grilled chicken, paired with fresh lettuce, ripe tomatoes, and creamy avocado. For an extra kick, we also offer a spicy mayo or tangy mustard to add some flavor to your sandwich. Whether you're looking for a light lunch or a hearty snack, our sandwich is the perfect choice to satisfy your hunger. Come in and try one today!",
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
        fullDes: "I'm excited to tell you about our Hot Milk at our coffee shop! We take great pride in the quality of our milk and it really shines in our Hot Milk. It's the perfect drink for those who want something warm and comforting without the intensity of coffee. Our Hot Milk is made with steamed whole milk, giving it a creamy and velvety texture that will make you want to curl up with a good book.",
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
        fullDes: "As the owner of this coffee shop, I am proud to present our signature Coffee Ice Cream. Made with freshly brewed coffee and the finest ingredients, this creamy dessert is the perfect way to cool down on a hot day or satisfy your sweet tooth after a meal. Our Coffee Ice Cream has a rich, bold flavor that will delight coffee lovers and dessert enthusiasts alike. Whether you enjoy it on its own or paired with a warm slice of pie, this ice cream is sure to leave you wanting more. Come try it for yourself and taste the difference that quality ingredients and expert craftsmanship can make.",
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
        fullDes: "As a coffee shop owner, I am proud to offer our signature Cappuccino. Our expert baristas use freshly ground espresso beans and perfectly frothed milk to create a smooth and creamy texture that is sure to delight your taste buds. Whether you're looking for a morning pick-me-up or a mid-day treat, our Cappuccino is the perfect choice. With its rich, bold flavor and velvety foam, it's no wonder why this classic drink has remained a favorite for generations. So come on in and experience the perfect balance of espresso and milk in every sip of our delicious Cappuccino.",
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
        fullDes: "Hey there! If you're looking for a delicious and unique coffee drink, then you have to try our Moccacinno! It's a perfect blend of espresso, chocolate, and milk, topped with a frothy layer of foam. Our baristas take pride in crafting each drink with care and precision, ensuring that every sip is rich and flavorful. The Moccacinno is perfect for those who want a little bit of sweetness in their coffee without it being too overpowering. Come on in and give it a try, I promise you won't be disappointed!",
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
        fullDes: "As a coffee shop owner, I am excited to introduce our latest addition to the menu - the Waffle Ice Cream! Our version of this classic dessert is made with freshly baked waffles, topped with a generous scoop of creamy ice cream, and drizzled with your choice of syrup. The combination of warm, crispy waffles and cold, smooth ice cream is simply irresistible. We offer a variety of ice cream flavors to choose from, including classic vanilla, rich chocolate, and refreshing mint. Whether you're in the mood for something sweet after your morning coffee or a late-night treat, our Waffle Ice Cream is the perfect indulgence. Come try it out today and treat your taste buds to a delicious experience!",
       }, //type char
      notes: 4.8, //type number
      views: "12K", //type string
      quantity:1
    },
  ];
localStorage.setItem('Products',JSON.stringify(product));
let flag =0;
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
    },10000); 
}


navProduct();
updateBasket();
updateBasket2();