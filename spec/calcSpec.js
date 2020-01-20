/* Start by describing a test in plain English. Break
it down step by step so it is understandable.

I want to test a calulator
    I am going to test the addition function
        I want to get the result of 42
        I expect the result of 20 + 22 to be 42
*/

describe('Calculator', function() {
    describe('Addition tests', function() {
        it('Should return 42', function() {
            expect(addition(20, 22)).toBe(42);
        });
    });
});