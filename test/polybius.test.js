const expect = require("chai").expect;
const polybius = require("../src/polybius.js");

describe("polybius", () => {
  it("Output should be false if supplied input is odd number", () => {
    const actual = polybius("12321", false);
    expect(actual).to.be.false;
  });

  it("Output should be a string", () => {
    const actual = polybius("hgs", true);
    expect(actual).to.be.a("string");
  });

  it("When encoding i sould return 42 and when encoding j sould return 42", () => {
    const expected = "4242";
    const actual = polybius("ji", true);
    expect(actual).to.be.equal(expected);
  });

  it("When decoding both i and j should be shown on output", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.be.equal(expected);
  });

  it("Output should ignore Capital letter", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello world");
    expect(actual).to.be.equal(expected);
  });

  it("Should maintain spaces", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.be.equal(expected);
  });
});
