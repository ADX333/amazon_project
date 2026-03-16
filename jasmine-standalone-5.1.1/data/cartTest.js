import {addToCart, cart} from '../../data/cart.js';
console.log('hello');
describe('Test Suite: Add to Cart',()=>{
  it('adds an existing product into the Cart', ()=>{
   //  expect(addToCart(matchingProduct))

  });
  it('adds a new product to the Cart',()=>{
    addToCart('abcd');
    expect(cart.length).toEqual(1);
  })
})