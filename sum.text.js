var add=require('../sum.js');
var expert=require('chai').expert;
describe('加法测试',function(){
  it ('0+0=0',function(){
    expect(add(0,0).to.be.equal(0));
  });
  it('1+0=0',function(){
    expect(add(1,0).to.be.equal(1))
  })
});
