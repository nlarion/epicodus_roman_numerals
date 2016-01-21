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

describe("wholeQuotient", function(){
  it("Will return whole number based on quotient", function(){
    expect(wholeQuotient(100,10)).to.equal(10);
  });
});

describe("createArray", function(){
  it("Will take an integer and build an array of roman numeral counts", function(){
    expect(createArray(14)).to.eql([0,0,0,0,1,0,4]);
  });
});

describe("convertToRoman", function(){
  it("Will take an integer and convert it into roman numerals", function(){
    expect(convertToRoman(14)).to.equal("XIV")
  })
})
