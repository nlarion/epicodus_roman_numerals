describe("typeChecker",function(){
  it("Will return false if not given a number",function(){
    expect(typeChecker("bull")).to.equal(false);
  });
});

describe("quotientGreaterThanOne", function(){
  it("Will return true if quotient is greater than one", function(){
    expect(quotientGreaterThanOne(14, 10)).to.equal(true);
  });
});

describe("returnWholeQuotient", function(){
  it("Will return whole number based on quotient", function(){
    expect(returnWholeQuotient(14,10)).to.equal(1);
  });
});



// describe("numChopper", function(){
//   it("Will return an array of integers that correspond to given groupings", function(){
//     expect(numChopper(14)).to.eql([4,0,1,0,0,0,0]);
//   });
// });
