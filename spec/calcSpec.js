/* Start by describing a test in plain English. Break
it down step by step so it is understandable.

I want to test a calulator
    I am going to test the addition function
        I want to get the result of 42
        I expect the result of 20 + 22 to be 42
*/

describe('Calculator', function() {

    beforeEach(function() {
    calc = new Calculator;
});

    describe('Addition tests', function() {
        it('Should return 42', function() {
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it('Should return 26', function() {
            calc.add(7);
            calc.add(19);
            expect(calc.value).toBe(26);
        });
        it('Should return an error if we don\'t supply two numbers', function() {
            spyOn(window, "alert"); //spies on the window alert function
            calc.add("Hitchhikers", "Guide");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});