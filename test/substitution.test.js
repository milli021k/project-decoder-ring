const expect = require("chai").expect;
const substitution = require("../src/substitution.js");

describe("substitution", () => {
  it("It returns false if the given alphabet isn't exactly 26 characters long.", () => {
    const expected = false;
    const actual = substitution("thinkful", "xoyqmcgruk");
    expect(actual).to.be.false;
  });

  it("It returns false if the given alphabet has duplicates", () => {
    const expected = false;
    const actual = substitution("thinkful", "xxyqmcgrukswaflnthdjpzibvv");
    expect(actual).to.be.false;
  });

  it("should encrypt if suplied input and alphabet", () => {
    const expected = "jrufscpw";
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    expect(actual).to.be.equal(expected);
  });

  it("should decrypt if suplied input and alphabet", () => {
    const expected = "thinkful";
    const actual = substitution(
      "jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.be.equal(expected);
  });

  it("It maintains spaces in the message, before and after encoding or decoding.", () => {
    const expected = "elp xhm xf mbymwwmfj dne";
    let actual = substitution(
      "You are an excellent spy",
      "xoyqmcgrukswaflnthdjpzibev"
    );
    expect(actual).to.be.equal(expected);
  });

  it("It ignores capital letter inputs.", () => {
    const expected = "thinkful";
    const actual = substitution(
      "Jrufscpw",
      "xoyqmcgrukswaflnthdjpzibev",
      false
    );
    expect(actual).to.be.equal(expected);
  });
});
