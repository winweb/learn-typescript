import { sayHello} from "../src/hello";

describe("This is a say hello", () => {
  test("Check the saayHello function", () => {
    expect(sayHello("Jun")).toEqual("Hello Jun");
  });
});
