function Cart(localStorageKey){
  let cart={  
  cartItems: undefined,
  loadFromStorage() {
  this.cartItems=JSON.parse(localStorage.getItem('localStorageKey'));

  if(!this.cartItems){
    this.cartItems=[{
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:2,
    deliveryId:'1'
  },{
    productId: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    quantity:1,
    deliveryId:'2'
  }];
  }
  },
  saveToStorage(){
  localStorage.setItem('localStorageKey', JSON.stringify(this.cartItems));
},
  addToCart(productId){
  let matchingItem;
    this.cartItems.forEach((cartItem)=>{
      if (productId==cartItem.productId){
        matchingItem=cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity+=1;
    }
    else{
      this.cartItems.push({
      productId : productId,
      quantity:1,
      deliveryId:'1'
    });
    }
    this.saveToStorage();
  },
  removeFromCart(productId){
  let newCart=[];
  this.cartItems.forEach((cartItem)=>{
    if (cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  }
)
  this.cartItems =newCart;
  this.saveToStorage();
}
  };
  return cart;
 }

const cart=Cart('cart-oop');
const businessCart= Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();
cart.addToCart('abcd');
console.log(cart);
console.log(businessCart);


