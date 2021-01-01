const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution" ,()=>{

it("should encrypt if suplied input and alphabet",()=>{
 const expected ="jrufscpw";
  const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
 expect(actual).to.be.equal(expected);
});  


  
it("should decrypt if suplied input and alphabet",()=>{
 const expected ="thinkful";
  const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);  
 expect(actual).to.be.equal(expected);
});  


});


