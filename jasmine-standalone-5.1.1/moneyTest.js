import {formatCurrency} from '../scripts/utils/money.js';

describe('Test suite: formatCurrency', ()=>{
  it('converts cents into dollars',()=>{
    expect(formatCurrency(2095)).toEqual('20.95');  
  });

  it('Works when rounding is needed',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
    console.log(formatCurrency(2000.5));
  })
})