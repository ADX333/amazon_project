export let cart=JSON.parse(localStorage.getItem('cart'));

if(!cart){
  cart=[{
  productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
  quantity:2,
  deliveryId:'1'
},{
  productId: "abcd",
  quantity:1,
  deliveryId:'2'
}];
}

function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function removeFromCart(productId){
  let newCart=[];
  cart.forEach((cartItem)=>{
    if (cartItem.productId!==productId){
      newCart.push(cartItem);
    }
  }
)
cart =newCart;
saveToStorage();
}

export function addToCart(productId){
  let matchingItem;
    cart.forEach((cartItem)=>{
      if (productId==cartItem.productId){
        matchingItem=cartItem;
      }
    });

    if(matchingItem){
      matchingItem.quantity+=1;
    }
    else{
      cart.push({
      productId : productId,
      quantity:1,
      deliveryId:'1'
    });
    }
    saveToStorage();
  }