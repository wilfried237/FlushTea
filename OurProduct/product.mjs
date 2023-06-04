
const products = [
  {
    id: 1, // type int
    name: "Sandwich", // type char
    img: "http://127.0.0.1:5500/image/sandwich.jpg", // type string
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
    id: 2, // type int
    name: "Hot Milk", // type char
    img: "http://127.0.0.1:5500/image/hotmilk.jpg", // type string
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
    id: 3, // type int
    name: "Coffee Ice Cream", // type char
    img: "http://127.0.0.1:5500/image/coffee-ice-cream.jpg", // type string
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
    id: 4, // type int
    name: "Cappucino", // type char
    img: "http://127.0.0.1:5500/image/cappicino.jpg", // type string
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
    id: 5, // type int
    name: "Moccacinno", // type char
    img: "http://127.0.0.1:5500/image/mocaccino.jpg", // type string
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
    id: 6, // type int
    name: "Waffle Ice Cream", // type char
    img: "http://127.0.0.1:5500/image/wafle-ice-cream.jpg", // type string
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
const menuSectionGrid = document.getElementById("menu-section-grid");
localStorage.setItem("Products",JSON.stringify(products));
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
cartElement();