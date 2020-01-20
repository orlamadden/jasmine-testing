describe("Checks age", function() {
    it("Should return Drink Toddy when called as whatCanIDrink(13)", function() {
        var result = whatCanIDrink(13)
        expect(result).toBe("Drink Toddy");
    });
});