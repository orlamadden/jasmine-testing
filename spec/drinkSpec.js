describe("My whatCanIDrink function", function(){
   
    beforeEach(function() {
       drink = new whatCanIDrink();
   });

    describe("Checks age", function() {
        it("Should exist", function() {
            expect(whatCanIDrink).toBeDefined();
        });
        it("Should return Drink Toddy when called as whatCanIDrink(13)", function() {
            var result = whatCanIDrink(13)
            expect(result).toBe("Drink Toddy");
        });
        it("Should return Drink Coke when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(17)
            expect(result).toBe("Drink Coke");
        });
        it("Should return Drink Beer when called as whatCanIDrink(19)", function() {
            var result = whatCanIDrink(19)
            expect(result).toBe("Drink Beer");
        });
        it("Should return Drink Whiskey when called as whatCanIDrink(99)", function() {
            var result = whatCanIDrink(99)
            expect(result).toBe("Drink Whiskey");
        });
        it("Should be unable to return a drink when called as whatCanIDrink(150)", function() {
            var result = whatCanIDrink(150)
            expect(result).toBe("Sorry I can't tell what drink because that age is incorrect!");
        });
        it("Should contain Drink when called as whatCanIDrink(17)", function() {
            var result = whatCanIDrink(10).indexOf("Drink")
            expect(result).not.toEqual(-1);
        });
    });
});