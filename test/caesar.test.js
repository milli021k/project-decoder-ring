// Write your tests here!
const expect = require("chai").expect;
const caesar = require("../src/caesar.js");

describe("caesar" ,()=>{

it("should return flase if shift is zero",()=>{
 const expected = false;
 const actual = caesar("hgs",0);
 expect(actual).to.equal(expected);
});


it("should return flase if shift is  greater than 25 ",()=>{
 const expected = false;
 const actual = caesar("mma",467);
 expect(actual).to.equal(expected);
    });
    
it("should return flase if shift is lessthan 25",()=>{ 
 const expected = false;
 const actual = caesar("hgs",-34);
 expect(actual).to.equal(expected);
});

it("should use a default value to return a message if encode is not provided",()=>{ 
    const expected = 'wklqnixo';
    const actual = caesar("thinkful", 3); 
    expect(actual).to.equal(expected);
   });
   

it("should endcode a text if all inputs are provided",()=>{ 
    const expected = 'bpqa qa i amkzmb umaaiom';
    const actual =    caesar("This is a secret message", 8); 
    expect(actual).to.equal(expected);
   });


it("should decode a text if all inputs are provided and decode is false",()=>{ 
    const expected = 'this is a secret message!';
    const actual =    caesar("BPQA qa I amkzmb umaaiom!", 8, false);  
    expect(actual).to.equal(expected);
   });


it("should decode a text if all inputs are provided and encode value is false",()=>{ 
    const expected = 'thinkful';
    const actual = caesar("wklqnixo", 3, false);  
    expect(actual).to.equal(expected);
   });


it("should decode a text if shift is negative and encode is default",()=>{ 
    const expected = 'qefkhcri';
    const actual = caesar("thinkful", -3);   
    expect(actual).to.equal(expected);
   });



});