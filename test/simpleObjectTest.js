describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });

  it('should sum 2 number', function() {
    var simpleObject = new SimpleObject();

    var result = simpleObject.sum(10, 15);

    expect(result).toBe(25);
  });
});