describe("Example Component Test", () => {
  test("Number greater than 10", () => {
    let value = 5;
    value += 8;

    if (value > 10) {
      //ToDo assert
    } else {
      throw `${value} is not greater than 10`;
    }
  });
});
