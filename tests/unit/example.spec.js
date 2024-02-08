describe("Example Component Test", () => {
  test("Number greater than 10", () => {
    let value = 5;
    value += 4;

    expect(value).toBeGreaterThan(10);
  });
});
