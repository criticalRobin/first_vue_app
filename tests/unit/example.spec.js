describe("Example Component Test", () => {
  test("Number greater than 10", () => {
    let value = 5;
    value += 10;

    expect(value).toBeGreaterThan(10);
  });
});
