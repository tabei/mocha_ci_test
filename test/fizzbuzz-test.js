var assert = require("assert");

var fizzbuzz = require("../src/fizzbuzz.js");

describe("fizzbuzz", function() {
    it("FizzBuzz", function() {
        assert.equal("FizzBuzz", fizzbuzz.calc(14));
    });

    it("Buzz", function() {
        assert.equal("Buzz", fizzbuzz.calc(5));
    });

    it("Fizz", function() {
        assert.equal("Fizz", fizzbuzz.calc(3));
    });

    it("other", function() {
        assert.equal("1", fizzbuzz.calc(1));
    });
});
